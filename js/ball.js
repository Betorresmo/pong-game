import {player, score, style} from './main.js';
import {oponent} from './oponent.js';
export {ballMovement, ball};

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

const ball = {
    radius: 15,
    xPosition: canvas.width/2,
    yPosition: canvas.height/2,
    xSpeed: -2.5,
    ySpeed: -2.5
}

function drawBall(x, y, radius){

    context.fillStyle = style.ballColor;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}

function ballColision(){

    if(ball.xPosition - ball.radius < 0){
        ball.xSpeed *= -1;
        score.oponent.textContent = parseInt(score.oponent.textContent) + 1;
    }
    if (ball.xPosition + ball.radius > canvas.width){
        ball.xSpeed *= -1;
        score.player.textContent = parseInt(score.player.textContent) + 1;
    }
    if(ball.yPosition - ball.radius < 0 || ball.yPosition + ball.radius > canvas.height){
        ball.ySpeed *= -1;
    }
    if(ball.xPosition - ball.radius < player.xPosition + player.width && ball.yPosition + ball.radius > player.yPosition && ball.yPosition - ball.radius < player.yPosition + player.height){
        ball.xSpeed *= -1;
    }
    if(ball.xPosition + ball.radius > oponent.xPosition && ball.yPosition + ball.radius > oponent.yPosition && ball.yPosition - ball.radius < oponent.yPosition + oponent.height){
        ball.xSpeed *= -1;
    }
}

function ballMovement(){
    
    ball.xPosition += ball.xSpeed;
    ball.yPosition += ball.ySpeed;
    drawBall(ball.xPosition, ball.yPosition, ball.radius);
    ballColision();

}