//Pull the id the of the canvas

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

function drawRect(x,y,w,h, color) {
    context.fillStyle = color;
    context.fillRect(x,y,w,h);  
}

drawRect(0,0,canvas.width,canvas.height, "green");


//drawCircle

function drawCircle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}

drawCircle(100,100,50,"white")

function drawText(text,x,y,color){
    context.font = "35px sans-serif";
    context.fillStyle = color;
    context.fillText(text, x,y);


}

drawText("Score",300,300,"white");