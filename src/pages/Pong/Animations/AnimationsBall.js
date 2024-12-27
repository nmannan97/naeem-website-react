import React, { useEffect } from 'react'
import { playerPosition } from './AnimationsPlayer';
import '../Pong.css';

var Move = {
  permission : false,
  x : true, // if false, move in negative X pixels
  y : true, // if false, move in negative Y pixels
  pixels : 5
}
var ballPosition = {
    x: 70,
    y: 450
}

const AnimationsBall = props => {
  
  useEffect(() => {
    
    const canvasBall = document.getElementById('Pong')
    const context = canvasBall.getContext('2d')

    var timer;

    function clear_Run() {
      timer = setInterval(function() {
          clearBall()
      }, 5);
    }
    function movement(){
      if(Move.permission){

        if(Move.x && Move.y){
          ballPosition.x += Move.pixels;
          ballPosition.y += Move.pixels;
        } else if(Move.x && ~Move.y){
          ballPosition.x += Move.pixels;
          ballPosition.y += -Move.pixels;
        } else if(~Move.x && Move.y){
          ballPosition.x += -Move.pixels;
          ballPosition.y += Move.pixels;
        }else if(~Move.x && ~Move.y){
          ballPosition.x += -Move.pixels;
          ballPosition.y += -Move.pixels;
        }
      }
      if(ballPosition.x > (canvasBall.offsetWidth*2)){
        Move.x = false;
      }else if(ballPosition.y >= (canvasBall.offsetHeight*2 -10)){
        Move.y = false;
      }else if(ballPosition.y < 10){
        Move.y = true;
      }else if((ballPosition.x == (playerPosition.x + 30)) && (ballPosition.y < playerPosition.y + 25 || ballPosition.y > playerPosition.y -25)){
        Move.x = true;
      }else if((ballPosition.y == (playerPosition.y)) && (ballPosition.y < playerPosition.y + 25 || ballPosition.y > playerPosition.y -25)){
        Move.x = true;
      }else if(ballPosition.x <= 0){
        Move.pixels = 0;
      }
      if(ballPosition.x < -40){
        ballPosition.x = 20;
        Move.x = true;
      }
    }

    function clearBall() {
        context.clearRect(0, 0, canvasBall.width, canvasBall.height);
    }

    function draw(xPosition, yPosition) {
        //console.log(xPosition, yPosition);
        context.beginPath();
        context.arc(xPosition/2, yPosition/2, 5, 0, 2*Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = 'black';
        context.stroke();
    }

    canvasBall.addEventListener('mouseover', function(event) {
      Move.permission = true;
      clear_Run(); 
    });
    
    canvasBall.addEventListener('mouseout' || 'mouseup', function(event) {
      Move.permission = true;
    });

      
    let animationFrameId
    
    
    const render = () => {
      movement();
      draw(ballPosition.x, ballPosition.y)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return(
      <p>
          Score
      </p>
  );
}

export default AnimationsBall;
