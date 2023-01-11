//Pull the id the of the canvas

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// create the user paddle

const user = {
    x:canvas.width - 10,
    y:canvas.height/2 - 100/2,
    width: 10,
    color:"WHITE",
    score:0

}

// create the computer paddle

const com = {
    x:0,
    y:canvas.height/2 - 100/2,
    width: 10,
    color:"WHITE",
    score:0

}


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