import '../Pong';

let gamePlay = false;
let player;

function restartGame(){
    gamePlay = true;
    console.log("Game has started")
    alert("Game has started")
    player={
        score: 0,
        lives: 1
    }
}

export default function Startbutton(){

    const btnStart = document.querySelector('.startButton');
    btnStart && btnStart.addEventListener("click",restartGame, false);

    return(
        <button className="startButton" onClick={startGame()}>
            Press to start me!
        </button>
    );
}