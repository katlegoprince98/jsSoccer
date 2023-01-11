//Pull the id the of the canvas

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

function drawRect(){
    context.fillStyle = color;
    context.fillRect(x,y,w,h);  
}