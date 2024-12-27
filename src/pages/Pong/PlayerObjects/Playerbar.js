import "../Pong.css"
import {Rect} from 'react-konva';

let gamePlay = false;
let player;

function startGame(){
    gamePlay = true;
    console.log("Game has started")
    alert("Game has started")
    player={
        score: 0,
        lives: 1
    }
}

export default function Playerbar(){

    const btnStart = document.querySelector('.playerBar');
    btnStart && btnStart.addEventListener("click",startGame, false);

    const handleDragStart = (e) =>{
        const id = e.target.id();
    }

    const handleDragEnd = (e) =>{
        const id = e.target.id();
    }

    return(
        <div id="playerBar">
            <Rect
            x={20}
            y={0}
            width={20}
            height={100}
            fill="black"
            shadowBlur={10}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            />
        </div>
        
    );
}