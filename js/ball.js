import {player} from './main.js';
export {ballMovement, ball};

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

const ball = {
    radius: 15,
    xPosition: canvas.width/2,
    yPosition: canvas.height/2,
    xSpeed: 1,
    ySpeed: 1
}

function drawBall(x, y){

    context.fillStyle = "#FFFFFF";
    context.beginPath();
    context.arc(x, y, 15, 0, 2 * Math.PI);
    context.fill();
}

function ballColision(){

    if(ball.xPosition - ball.radius == 0 || ball.xPosition + ball.radius == canvas.width){
        ball.xSpeed *= -1;
    }
    if(ball.yPosition - ball.radius == 0 || ball.yPosition + ball.radius == canvas.height){
        ball.ySpeed *= -1;
    }
    if(ball.xPosition - ball.radius < player.xPosition + player.width && ball.yPosition + ball.radius > player.yPosition && ball.yPosition - ball.radius < player.yPosition + player.height){
        ball.xSpeed *= -1;
    }
}

function ballMovement(){
    
    ball.xPosition += ball.xSpeed;
    ball.yPosition += ball.ySpeed;

    context.clearRect(0, 0,canvas.width, canvas.height);
    drawBall(ball.xPosition, ball.yPosition);

    ballColision();

}