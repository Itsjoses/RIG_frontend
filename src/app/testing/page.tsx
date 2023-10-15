"use client";
import { log } from "console";
import React, { useEffect, useState } from "react";

export default function page() {
  const [boxStyle, setBoxStyle] = useState({
    display: "none",
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    background: "blue",
  });

  let startXY = { x: 0, y: 0 };
  const [gridValue, setGridValue] = useState<number[]>([]);
  const handleMouseMove = (event: MouseEvent) => {
    const startX = startXY.x
    const startY = startXY.y
    const currentX = event.clientX;
    const currentY = event.clientY;
    const width = currentX - startX;
    const height = currentY - startY;

    setBoxStyle({
      display: "block",
      left: startXY.x,
      top: startXY.y,
      width,
      height,
      background: "blue",
    });

    // Check if the box is over a grid element
    const gridElements = document.querySelectorAll(".grid-element");

    gridElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // console.log(rect);
      if (
        startX < rect.right &&
        startY < rect.bottom &&
        (startX + width) > rect.left &&
        (startY + height) > rect.top
      ) {
        console.log("Testing");
        
        // Box is over this grid element, get its value
        const value = parseInt(element.getAttribute("data-value") || "");
        const tempArray = gridValue
        if (!tempArray.includes(value)) {
            tempArray.push(value);
            setGridValue(tempArray);
        }else{
            tempArray.pop(value);
            setGridValue(tempArray);
        }
      }
    });
  };

  const handleMouseDown = (event: MouseEvent) => {
    const startX = event.clientX;
    const startY = event.clientY;
    startXY = { x: startX, y: startY };

    setBoxStyle({
      display: "block",
      left: startX,
      top: startY,
      width: 0,
      height: 0,
      background: "blue",
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    setBoxStyle({
      display: "none",
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      background: "blue",
    });
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [boxStyle]);

  return (
    <div className="container-large w-screen h-screen flex flex-col justify-center items-center">
      <div
        id="kotak"
        style={boxStyle}
        className="absolute w-12 h-12 bg-red-700 opacity-30"
      ></div>
      <div className="grid p-4 gap-4">
        {/* Grid elements with values */}
        <div
        draggable="false"
          className="grid-element w-12 h-12 bg-red-700 flex justify-center items-center"
          data-value="1"
        >
          1
        </div>
        <div
        draggable="false"
          className="grid-element w-12 h-12 bg-red-700 flex justify-center items-center"
          data-value="2"
        >
          2
        </div>
        <div
        draggable="false"
          className="grid-element w-12 h-12 bg-red-700 flex justify-center items-center"
          data-value="3"
        >
          3
        </div>
        <div
        draggable="false"
          className="grid-element w-12 h-12 bg-red-700 flex justify-center items-center"
          data-value="4"
        >
          4
        </div>
        <div
        draggable="false"
          className="grid-element w-12 h-12 bg-red-700 flex justify-center items-center"
          data-value="5"
        >
          5
        </div>
      </div>
      <p>Grid Value: {gridValue.map(e => (
        e
      ))}</p>
    </div>
  );
}