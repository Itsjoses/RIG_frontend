"use client";
import { BlueButton, RedButton } from "@/components/button/button";
import CardDiv from "@/components/card/cardDiv";
import Computer from "@/components/computer/computer";
import Header from "@/pages/header/header";
import Navbar from "@/pages/header/navbar";
import {
  ResponsiveLayout,
  ResponsiveLayoutBorder,
} from "@/pages/utilities/responsiveLayout";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

interface mouseCoord {
  x: number;
  y: number;
}

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let startCursor: mouseCoord = { x: 0, y: 0 };
  const divRef = useRef<HTMLDivElement | null>(null);
  const [computerSelected, setComputerSelected] = useState<string[]>([]);

  const getCursorCoordinate = (e: MouseEvent) => {
    if (containerRef.current) {
      return {
        x: e.clientX - containerRef.current.getBoundingClientRect().left,
        y: e.clientY - containerRef.current.getBoundingClientRect().top,
      };
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousedown", handleMouseDown);
      return () => {
        containerRef.current?.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, []);

  const handleMouseDown = (event: MouseEvent) => {
    startCursor = getCursorCoordinate(event);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (divRef.current) {
      divRef.current.style.display = "block";
      const move = getCursorCoordinate(e);
      const xCheck = move.x - startCursor.x;
      const yCheck = move.y - startCursor.y;
      divRef.current.style.left = Math.min(startCursor.x, move.x) + "px";
      divRef.current.style.top = Math.min(startCursor.y, move.y) + "px";
      divRef.current.style.height = Math.abs(yCheck) + "px";
      divRef.current.style.width = Math.abs(xCheck) + "px";

      const gridElements = document.querySelectorAll(".computer");

      gridElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          Math.min(startCursor.x, move.x) <
            rect.left -
              containerRef.current.getBoundingClientRect().left +
              rect.width &&
          Math.min(startCursor.y, move.y) <
            rect.top -
              containerRef.current.getBoundingClientRect().top +
              rect.height &&
          Math.min(startCursor.x, move.x) + Math.abs(xCheck) >
            rect.left - containerRef.current.getBoundingClientRect().left &&
          Math.min(startCursor.y, move.y) + Math.abs(yCheck) >
            rect.top - containerRef.current.getBoundingClientRect().top
        ) {
          const value = element.getAttribute("id");
          const arrayComputer: string[] = computerSelected;
          if (!arrayComputer.includes(value)) {
            arrayComputer.push(value);
            setComputerSelected(arrayComputer);
          }

          if (!element.classList.contains("selected")) {
            // If it exists, remove the "selected" class
            element.classList.remove("shadow-[0_1px_2px_rgba(0,0,0,0.3)]");
            element.classList.add("shadow-selectedShadow");
          }
        }
      });
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    divRef.current.style.display = "none";
    divRef.current.style.height = 0 + "px";
    divRef.current.style.width = 0 + "px";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    console.log(computerSelected);
  };

  const selectAll = () =>{
    const gridElements = document.querySelectorAll(".computer");

    gridElements.forEach((element) => {
        const value = element.getAttribute("id");
        const arrayComputer: string[] = computerSelected;
        if (!arrayComputer.includes(value)) {
          arrayComputer.push(value);
          setComputerSelected(arrayComputer);
        }
        if (!element.classList.contains("selected")) {
          element.classList.remove("shadow-[0_1px_2px_rgba(0,0,0,0.3)]");
          element.classList.add("shadow-selectedShadow");
        }
    });
  }

  const noneAll = () =>{
    const gridElements = document.querySelectorAll(".computer");

    gridElements.forEach((element) => {
        if (!element.classList.contains("selected")) {
          element.classList.remove("shadow-selectedShadow");
          element.classList.add("shadow-[0_1px_2px_rgba(0,0,0,0.3)]");
        }
    });
    setComputerSelected([])
  }

  return (
    <div className="min-h-screen bg-[#EBF0F9] ">
      <Header />
      <Navbar />
      <main>
        <ResponsiveLayout>
          <div className="w-full mx-auto m-4 p-4 flex justify-end gap-3 bg-white rounded-md drop-shadow-md">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md drop-shadow-md">
              Upload File
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md drop-shadow-md">
              Upload File
            </button>
          </div>
        </ResponsiveLayout>
        <ResponsiveLayout>
          <div
            className="w-full mx-auto m-4 p-4 bg-white rounded-md drop-shadow-md"
          >
            <div className="border-b border-slate-200 pb-4 flex justify-between items-center">
              <div className="left text-blue-600 font-bold">Computers</div>
              <div className="right gap-2 flex items-center">
                <BlueButton callback={selectAll}>Clear Status</BlueButton>
                <span>|</span>
                <BlueButton callback={selectAll}>All</BlueButton>
                <RedButton callback={noneAll}>None</RedButton>
                <span>|</span>
                <BlueButton callback={selectAll}>Success</BlueButton>
                <RedButton callback={noneAll}>Failed</RedButton>
              </div>
            </div>
            <div ref={containerRef} className="relative">
              <div
                className="absolute top-0 left-0 border-dotted border border-black hidden"
                ref={divRef}
              ></div>
              <div className="grid xl:grid-cols-10  lg:grid-cols-8 md:grid-cols-5 gap-4 px-4 py-5">
                {Array.from({ length: 10 }, (_, index) => (
                  <Computer key={index} id={String(index + 1)}>
                    {index + 1}
                  </Computer>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveLayout>
      </main>
    </div>
  );
}
