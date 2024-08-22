
document.getElementById("yesButton").addEventListener("click", function() {
    
    setTimeout(function() {        
        window.location.href = "yes.html";
    }, 800);
});   
function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

let body = document.querySelector("body");
body.addEventListener("click",function(event){
    for(let i=0; i<50; i++){
        let spark = document.createElement("i");
        spark.style.top = (event.clientY - body.offsetTop) + 'px';
        spark.style.left = (event.clientX - body.offsetLeft) + 'px';

        let randomX = (Math.random() - 0.5) * window.innerWidth / 1.5;
        let randomY = (Math.random() - 0.5) * window.innerHeight / 1.5;

        spark.style.setProperty('--randomX', randomX + "px");
        spark.style.setProperty('--randomY', randomY + "px");

        let randomSize = Math.random() * 30 + 2;
            spark.style.width = randomSize + "px";
            spark.style.height = randomSize + "px";

        let colors = ['#eb45ff','#ff45eb','#ff459b','#ff4548'];
        let randomColor = colors[Math.floor (Math.random() * colors.length)];
        spark.style.background = randomColor;

        body.appendChild(spark);
        setTimeout(() => {
            spark.remove();
        }, 2000);
    }
})