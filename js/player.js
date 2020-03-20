import {player} from './main.js';
export {drawPlayer};

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

function drawPlayer(x, y){

    context.fillStyle = '#ffffff';
    context.fillRect (x, y, player.width, player.height);
}

globalThis.addEventListener('keydown', function(keyPress){

    if(player.yPosition > 0 && player.yPosition + player.height < canvas.height){

        switch(keyPress.key){
            case 'ArrowDown':
                player.yPosition += 25;
                    break;
            case 'ArrowUp':
                player.yPosition -= 25;
                break;
        }
    }
    else if(player.yPosition <= 0 && keyPress.key == 'ArrowDown'){
        player.yPosition += 20;
    }
    else if(player.yPosition + player.height >= canvas.height && keyPress.key == 'ArrowUp'){
        player.yPosition -= 20;
    }
})