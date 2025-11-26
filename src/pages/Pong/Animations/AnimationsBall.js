import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import '../Pong.css';

export default function AnimationsBall() {
  const canvasRef = useRef(null);
  const playerRef = useRef({ x: 45, y: 200 }); // Paddle's position (ref for animation loop)
  const ballRef = useRef({ x: 50, y: 200, dx: 2, dy: 2, radius: 0 }); // Ball's position (ref for animation loop)
  const [move, setMove] = useState(false)
  const [score, setScore] = useState(0);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists
    const context = canvas.getContext('2d');

    // Set the canvas dimensions dynamically
    const updateCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Reset positions proportionally
      playerRef.current.y = canvas.height / 2;
      ballRef.current = {
        ...ballRef.current,
        x: canvas.width / 4,
        y: canvas.height / 2,
        radius: canvas.width / 75, // Ball radius scales with canvas size
        dx: canvas.width / 100,   // Ball speed scales with canvas size
        dy: canvas.height / 100,
      };
    };
  
    

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    let animationFrameId;

    const drawPlayer = () => {
      context.fillStyle = 'black';
      const player = playerRef.current;
      context.fillRect(player.x, player.y - canvas.height / 10, canvas.width / 50, canvas.height / 5); // Paddle dimensions
    };

    const drawBall = () => {
      const ball = ballRef.current;
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // Draw the ball
      context.fillStyle = 'black';
      context.fill();
      context.closePath();
    };

    const clearCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const updateBall = () => {
      if(move == true){
        const ball = ballRef.current;
        const player = playerRef.current;

        // Move the ball
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce off top and bottom walls
        if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
          ball.dy = -ball.dy;
        }

        // Bounce off the paddle
        if (
          ball.x + ball.dx < player.x + canvas.width / 50 &&
          ball.y > player.y - canvas.height / 10 &&
          ball.y < player.y + canvas.height / 10
        ) {
          ball.dx = -ball.dx;
          setScore(prevScore => prevScore + 1);
        }

        // Reset if the ball goes out of bounds
        if (ball.x + ball.dx < 0) {
          ball.x = canvas.width / 4;
          ball.y = canvas.height / 2;
          ball.dx = canvas.width / 150;
          ball.dy = canvas.height / 150;
          setMove(false)
        }

        if (ball.x + ball.dx > canvas.width) {
          ball.dy = ball.dy;
          ball.dx = -ball.dx;
        }

        // Bounce off the paddle
        if (
          ball.x + ball.dx < player.x + 10 &&
          ball.y > player.y - 25 &&
          ball.y < player.y + 25
        ) {
          ball.dx = -ball.dx;
          setScore(prevScore => prevScore + 1);
        }

        // Reset if the ball goes out of bounds
        if (ball.x + ball.dx < 0) {
          ball.x= player.x + 20 
          ball.y= player.y
          ball.dx= 3
          ball.dy= 3
          setScore(0);
        }
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

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [move]);

  useEffect(() => {
      if (!API_BASE) {
        console.error("API base URL missing");
        return;
      }

      if (score > 0 && !move) {
        axios.post(`${API_BASE}/submit-score`, { score })
          .then(res => console.log('Score posted:', res.data))
          .catch(err => console.error('Failed to post score:', err));
      }
  }, [score, move]);

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;
    // Update the paddle position in the ref
    playerRef.current.y = Math.min(Math.max(mouseY, canvas.height / 10), canvas.height - canvas.height / 10);
  };

  return (
    <>
      <div>
        <canvas
          ref={canvasRef}
          id="Pong_canvas"
          style={{ margin: "auto", 
                  border: '1px solid black', 
                  minHeight: "400px", 
                  height: '50vh', 
                  maxWidth: "70vw", 
                  aspectRatio: '1 / 1',
                  marginTop: "10px" }}
          onMouseMove={handleMouseMove} // Attach the mouse move handler
        />
        <button style={{ border: '1px solid black', 
                        height: '50px', aspectRatio: '5 / 1', 
                        backgroundColor: "red", 
                        borderRadius: "10px", 
                        textDecoration: "none"  }} 
                onClick={() => {setScore(0); setMove(true)}}> 
            <p style={{ fontSize: "25px", margin: "auto"}}> 
              Start / Restart game 
            </p>
          </button>
        <p>Score: {score}</p>
        
      </div>
      
    </>
    
  );
};