export {player, style};
import {ballMovement} from './ball.js';
import {drawPlayer} from './player.js';
import {drawOponent} from './oponent.js';

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

const style = {
    ballColor: '#ffffc1',
    playersColor: '#ffffc1',
    fieldLine: '#d38cad'
};
const player = {
    width: 15,
    height: 70,
    xPosition: 10,
    yPosition: 100
};

function drawFieldLine(){
    context.fillStyle = style.fieldLine;
    context.fillRect (canvas.width/2 - 7.5, 0, 15, canvas.height);
}

setInterval(()=>{

    context.clearRect(0, 0,canvas.width, canvas.height);
    drawFieldLine();
    ballMovement();
    drawPlayer(player.xPosition, player.yPosition);
    drawOponent();
},5);