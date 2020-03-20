export {player};
import {ballMovement} from './ball.js'

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

const player = {
    width: 15,
    height: 70,
    xPosition: 15,
    yPosition: canvas.height/2-35
}

function drawPlayer(){

    context.fillStyle = '#ffffff';
    context.fillRect (player.xPosition, player.yPosition, player.width, player.height);
}

globalThis.addEventListener('keydown', function(keyPress){
    
    console.log(keyPress.key);

    switch(keyPress.key){
        case 'ArrowDown':
            player.yPosition+=20;
                break;
        case 'ArrowUp':
            player.yPosition-=20;
            break;
    }
})

drawPlayer(50);


setInterval(()=>{

    ballMovement();
    drawPlayer();
}, 1);

/* 'ArrowDown' 'ArrowUp' */