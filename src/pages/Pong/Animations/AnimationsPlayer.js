import React, { useState, useEffect } from 'react'
import '../Pong.css';

export default function AnimationsPlayer() {
  
  const [player, setPlayer] = useState({x: 20, y:50})
  const [drag, setDrag] = useState(false)

  useEffect(() => {
    
    const canvasPlayer = document.getElementById("Pong")
    const context = canvasPlayer.getContext('2d')

    canvasPlayer.width = 450;
    canvasPlayer.height = 450;

    function clear() {
      context.clearRect(0, 0, canvasPlayer.width, canvasPlayer.height);
    }

    function draw() {
      context.fillRect(player.x, player.y - 125, 5, 50);
      //player.y = yPosition
    }

    canvasPlayer.addEventListener('mouseover', function(event) {
      setDrag(true);
      console.log("Player position Y: " , player.y)
    });
    
    canvasPlayer.addEventListener('mousemove', function(event) {
      clear()
      if (drag) { 
        setPlayer({x:20, y:event.clientY})
        //player.y = event.clientY
      }
    });
    
    canvasPlayer.addEventListener('mouseout', mouseOut) 
    canvasPlayer.addEventListener('mouseout', mouseOut) 
    function mouseOut() {
      setDrag(false);
    }
 
    let animationFrameId
    
    const render = () => {
      draw()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, 10)

  return(
      <p>
        Player 
      </p>
  );
}