import {player, style} from './main.js';
export {drawPlayer};

const canvas = document.querySelector("#pong");
const context = canvas.getContext('2d');

function drawPlayer(x, y){

    context.fillStyle = style.playersColor;
    context.fillRect (x, y, player.width, player.height);
}

window.addEventListener('keydown',(keyDown)=>{

    console.log(keyDown)

    if(player.yPosition > 0 && player.yPosition + player.height < canvas.height){

        switch(keyDown.key){
            case 'ArrowDown':
                player.yPosition += 25;
                    break;
            case 'ArrowUp':
                player.yPosition -= 25;
                break;
        }
    }
    else if(player.yPosition <= 0 && keyDown.key == 'ArrowDown'){
        player.yPosition += 25;
    }
    else if(player.yPosition + player.height >= canvas.height && keyDown.key == 'ArrowUp'){
        player.yPosition -= 25;
    }
})