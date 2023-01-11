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

//create a ball
const ball = {

    x:canvas.width/2,
    y:canvas.height/2,
    radius:10,
    speed:5,
    velocityX:5,
    velocityY:5,    
    color : "WHITE"     
}


function drawRect(x,y,w,h, color) {
    context.fillStyle = color;
    context.fillRect(x,y,w,h);  
}

const net = {
    x:canvas.width - 1,
    y:0,
    width:2,
    height: 10,
    color: "WHITE"

}
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x,net.y,+i,net.width,net.height,net.color);
    }
}



//drawCircle

function drawCircle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}



function drawText(text,x,y,color){
    context.font = "35px sans-serif";
    context.fillStyle = color;
    context.fillText(text, x,y);


}


function render(){
    drawRect(0,0,canvas.width,canvas.height, "green");
    drawNet();
    drawText(user.score,canvas.width/4,context.height/5,"WHITE");
    drawText(com.score,canvas.width/4,context.height/5,"WHITE");
    drawRect(user.x,user.y,user.width,user.height,user.color);
    drawRect(com.x,com.y,com.width,com.height,com.color);
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
}

function game() {
 render();

}
const framePerSecond = 50;
setInterval(game,1000/framePerSecond);

