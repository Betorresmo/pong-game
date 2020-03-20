export {player};
import {ballMovement} from './ball.js';
import {drawPlayer} from './player.js';
import {drawOponent} from './oponent.js';

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

const player = {
    width: 15,
    height: 70,
    xPosition: 10,
    yPosition: canvas.height/2 - 35
}

setInterval(()=>{

    context.clearRect(0, 0,canvas.width, canvas.height);
    ballMovement();
    drawPlayer(player.xPosition, player.yPosition);
    drawOponent();
},10);