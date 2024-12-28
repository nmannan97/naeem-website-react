import React, { useState, useEffect, useRef } from 'react';
import '../Pong.css';

const AnimationsBall = () => {
  const canvasRef = useRef(null); // Ref to access the canvas
  const [player, setPlayer] = useState({ x: 20, y: 200 }); // Paddle's position
  const [ball, setBall] = useState({ x: 40, y: 200, dx: 3, dy: 3, moving: true }); // Ball's position
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Safety check
    const context = canvas.getContext('2d');
    canvas.width = 449;
    canvas.height = 450;

    let animationFrameId;

    // Draw the paddle (player)
    const drawPlayer = () => {
      context.fillStyle = 'black';
      context.fillRect(player.x, player.y - 30, 5, 60); // Paddle dimensions
    };

    // Draw the ball
    const drawBall = () => {
      context.beginPath();
      context.arc(ball.x, ball.y, 5, 0, Math.PI * 2);
      context.fillStyle = 'red';
      context.fill();
      context.closePath();
    };

    // Clear the canvas
    const clearCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    // Ball and paddle movement logic
    const updateBall = () => {
      if (ball.moving) {
        // Move the ball
        setBall(prev => ({
          ...prev,
          x: prev.x + prev.dx,
          y: prev.y + prev.dy,
        }));

        // Bounce off top and bottom walls
        if (ball.y + ball.dy < 5 || ball.y + ball.dy > canvas.height - 5) {
          setBall(prev => ({ ...prev, dy: -prev.dy }));
        }

        // Bounce off the paddle
        if (
          ball.x + ball.dx < player.x + 10 &&
          ball.y > player.y - 25 &&
          ball.y < player.y + 25
        ) {
          setBall(prev => ({ ...prev, dx: -prev.dx }));
          setScore(prevScore => prevScore + 1);
        }

        // Reset if the ball goes out of bounds
        if (ball.x + ball.dx < 0) {
          setBall({ x: player.x + 20, y: player.y, dx: 3, dy: 3, moving: false });
          setScore(0);
        }
      } else {
        // Make the ball follow the paddle
        setBall(prev => ({ ...prev, x: player.x + 20, y: player.y }));
      }
    };

    const render = () => {
      clearCanvas();
      drawPlayer();
      drawBall();
      updateBall();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // Cleanup on component unmount
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });

  // Handle paddle movement
  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;

    setPlayer(prev => ({ ...prev, y: mouseY }));
  };

  // Start the ball's independent movement
  const startBall = () => {
    setBall(prev => ({ ...prev, moving: true }));
  };

  return (
    <div>
      <canvas
        ref={canvasRef} // Attach the ref to the canvas element
        id="Pong"
        style={{ border: '1px solid black' }}
        onMouseMove={handleMouseMove}
      ></canvas>
      <p>Score: {score}</p>
    </div>
  );
};

export default AnimationsBall;
