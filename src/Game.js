import React, { useState, useEffect } from 'react';

function Game() {
  const [ballPosition, setBallPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ dx: 1.4, dy: 1.4 }); // Initial speed ~2
  const [score, setScore] = useState(0);

  const fieldWidth = 700; // Width of the rectangular field
  const fieldHeight = 500; // Height of the rectangular field
  const ballSize = 50; // Diameter of the ball

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((prevPosition) => {
        const { x, y } = prevPosition;
        const { dx, dy } = velocity;

        let newDx = dx;
        let newDy = dy;

        // Check for collision with field boundaries
        if (x + dx <= 0 || x + dx >= fieldWidth - ballSize) {
          newDx = -dx + getRandomAdjustment();
        }
        if (y + dy <= 0 || y + dy >= fieldHeight - ballSize) {
          newDy = -dy + getRandomAdjustment();
        }

        setVelocity({ dx: newDx, dy: newDy });

        return {
          x: x + newDx,
          y: y + newDy,
        };
      });
    }, 16); // 60 FPS

    return () => clearInterval(interval);
  }, [velocity]);

  const handleBallClick = () => {
    setScore((prevScore) => prevScore + 1);

    // Increase the ball's speed
    setVelocity((prevVelocity) => {
      const speedIncrement = 2; // Increment speed by 2
      return {
        dx: prevVelocity.dx > 0 ? prevVelocity.dx + speedIncrement : prevVelocity.dx - speedIncrement,
        dy: prevVelocity.dy > 0 ? prevVelocity.dy + speedIncrement : prevVelocity.dy - speedIncrement,
      };
    });

    alert('You caught the ball! Speed increased!');
  };

  // Function to generate a small random adjustment for the velocity
  const getRandomAdjustment = () => {
    const randomness = Math.random() * 0.5 - 0.25; // Random value between -0.25 and 0.25
    return randomness;
  };

  return (
    <div
      style={{
        width: `${fieldWidth}px`,
        height: `${fieldHeight}px`,
        position: 'relative',
        margin: '50px auto',
        backgroundColor: 'transparent', // Transparent background
        border: '2px solid white', // White border
        overflow: 'hidden',
        boxSizing: 'border-box', // Ensures border is part of the total width/height
        cursor: 'url(/path-to-your-mosquito-bat.png), auto', // Custom cursor
      }}
    >
      {/* Ball */}
      <div
        style={{
          position: 'absolute',
          top: ballPosition.y,
          left: ballPosition.x,
          width: `${ballSize}px`,
          height: `${ballSize}px`,
          borderRadius: '50%',
          backgroundColor: 'red',
          cursor: 'pointer',
        }}
        onClick={handleBallClick}
      />
      {/* Score Display */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Score: {score}
      </div>
    </div>
  );
}

export default Game;
