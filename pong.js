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
   canvas.fillStyle = color;
   canvas.beginPath();
   canvas.arc(x,y,r,0,Math.PI*2,false);
   canvas.closePath();
   canvas.fill();
}

drawCircle(0,0,50,"white")