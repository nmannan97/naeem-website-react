import React, { useEffect } from 'react'
import '../Pong.css';

var drag = false;
var playerPosition = {
  x : 20,
  y: -20
};

const AnimationsPlayer = props => {
  
  useEffect(() => {
    
    const canvasPlayer = document.getElementById("Pong")
    const context = canvasPlayer.getContext('2d')

    canvasPlayer.width = 450;
    canvasPlayer.height = 450;

    function clear() {
        context.clearRect(0, 0, canvasPlayer.width, canvasPlayer.height);
    }

    function draw(yPosition) {
        context.fillRect(playerPosition.x, yPosition - 125, 5, 50);
    }

    canvasPlayer.addEventListener('mouseover' || 'mousedown', function(event) {
      drag = true;
  
    });
    
    canvasPlayer.addEventListener('mousemove', function(event) {
      clear()
      if (drag) { 
        //context.translate(0, event.clientY)
        playerPosition.y = event.clientY
        
      }
    
      });
    
      canvasPlayer.addEventListener('mouseout' || 'mouseup', function(event) {
        drag = false;
    
      });

      
    let animationFrameId
    
    
    const render = () => {
      draw(playerPosition.y)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return(
      <p>
        Player 
      </p>
  );
}

export {playerPosition}
export default AnimationsPlayer
