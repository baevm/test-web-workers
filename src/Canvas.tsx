/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inner-declarations */
import { useEffect, useRef } from 'react';

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if(canvasRef && canvasRef.current){
          const ctx = canvasRef.current.getContext("2d")!;
    
            // Set the initial position of the dot
            const centerX = canvasRef.current.width / 2;
            const centerY = canvasRef.current.height / 2;
    
            // Set the initial angle
            let angle = 0;
    
            // Set the radius of the circle
            const radius = 50;
    
            // Function to draw the dot at the current position
            function drawDot(x: any, y:any) {
                ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height); // Clear the canvas
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
    
            // Function to update the position of the dot in a circular path
            function update() {
                // Calculate the new position based on the angle and radius
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
    
                // Draw the dot at the new position
                drawDot(x, y);
    
                // Increment the angle for the next frame
                angle += 0.05;
    
                // Request the next animation frame
                requestAnimationFrame(update);
            }
    
            update()
        }
    
      }, [canvasRef])

  return (
    <canvas ref={canvasRef} id="myCanvas" width="400" height="400" style={{border: "1px solid green"}}></canvas>
  )
}

export default Canvas