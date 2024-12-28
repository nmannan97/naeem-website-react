import React, { useState, useEffect, useRef } from 'react';
import '../Pong.css';

export default function AnimationsPlayer() {
  const [player, setPlayer] = useState({ x: 20, y: 0 });
  const [drag, setDrag] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasPlayer = canvasRef.current;
    const context = canvasPlayer.getContext('2d');

    canvasPlayer.width = 450;
    canvasPlayer.height = 450;

    function clear() {
      context.clearRect(0, 0, canvasPlayer.width, canvasPlayer.height);
    }

    function draw() {
      clear();
      context.fillStyle = 'black'; // Ensure the rectangle is visible
      context.fillRect(player.x, player.y - 25, 5, 50); // Adjusted for accurate positioning
    }

    function handleMouseMove(event) {
      if (drag) {
        setPlayer(prevPlayer => ({
          ...prevPlayer,
          y: event.clientY - canvasPlayer.getBoundingClientRect().top, // Adjust for canvas offset
        }));
      }
    }

    function handleMouseOver() {
      setDrag(true);
    }

    function handleMouseOut() {
      setDrag(false);
    }

    // Add event listeners
    canvasPlayer.addEventListener('mousemove', handleMouseMove);
    canvasPlayer.addEventListener('mouseover', handleMouseOver);
    canvasPlayer.addEventListener('mouseout', handleMouseOut);

    // Animation loop
    let animationFrameId;
    const render = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    // Cleanup
    return () => {
      canvasPlayer.removeEventListener('mousemove', handleMouseMove);
      canvasPlayer.removeEventListener('mouseover', handleMouseOver);
      canvasPlayer.removeEventListener('mouseout', handleMouseOut);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [drag, player]); // Depend on `drag` and `player` to ensure proper updates

  return (
    <div>
      <canvas className="Pong_Canvas" ref={canvasRef} style={{ border: '1px solid black' }}></canvas>
      <p>Player position: ({player.x}, {player.y})</p>
    </div>
  );
}
