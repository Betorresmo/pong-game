import {drawPlayer} from './player.js';
import {ball} from './ball.js';
export {drawOponent, oponent}; 

const canvas = document.querySelector("#pong");

const oponent = {
    width: 15,
    height: 70,
    xPosition: canvas.width - 25,
    yPosition: canvas.height/2 - 35
};

function oponentMovement(){

    if(ball.yPosition < oponent.yPosition - 10){
        oponent.yPosition -= 2.4;
    } else if(ball.yPosition > oponent.yPosition + 10){
        oponent.yPosition += 2.4;
    }
}

function drawOponent(){
    
    drawPlayer(oponent.xPosition, oponent.yPosition);
    oponentMovement();
}