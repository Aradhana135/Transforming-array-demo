import React, { useState } from "react";

const Main = () => {
  const [shape, setShape] = useState([
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: "square", x: 150, y: 100 },
    { id: 0, type: "circle", x: 250, y: 100 }
  ]);
  const handleClick = () => {
    const nextShape = shape.map((shape) => {
      if (shape.type === "square") {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShape(nextShape);
  };
  return (
    <>
      <button onClick={handleClick}>Click to move the images down</button>
      <div>
        {shape.map((shape) => (
          <div
            style={{
              background: "grey",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 50,
              height: 50,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
