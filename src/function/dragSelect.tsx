import { containerRef, divRef, startCursor } from "@/app/home/page";

interface mouseCoord {
    x: number;
    y: number;
  }

export const getCursorCoordinate = (e: MouseEvent) => {
    return {
      x: e.clientX - containerRef.current.getBoundingClientRect().left,
      y: e.clientY - containerRef.current.getBoundingClientRect().top,
    };
  };


export const handleMouseDown = (event: MouseEvent) => {
    // console.log(
    //   event.clientX - containerRef.current.getBoundingClientRect().left
    // );
    // console.log(event.clientY);

    // isMouseDownRef.current = true;
    // divWidthRef.current = event.clientX;
    const startCursor = getCursorCoordinate(event);
    // divRef.current.style.left = event.clientX - containerRef.current.getBoundingClientRect().left + 'px';
    // divRef.current.style.top = event.clientY - containerRef.current.getBoundingClientRect().top + 'px';
    window.addEventListener("mousemove",handleMouseMove);
    window.addEventListener("mouseup",handleMouseUp);

    // customAddEventListener("create", "mousemove", handleMouseMove, startCursor);
    // customAddEventListener("create", "mouseup", handleMouseUp, startCursor);
};


export const handleMouseMove = (e: MouseEvent) => {
    // console.log("asd");

    const move = getCursorCoordinate(e);
    const xCheck = move.x - startCursor.x;
    const yCheck = move.y - startCursor.y;
    divRef.current.style.left =
      xCheck < 0 ? startCursor.x + xCheck + "px" : startCursor.x + "px";
    divRef.current.style.top =
      yCheck < 0 ? startCursor.y + yCheck + "px" : startCursor.y + "px";
    divRef.current.style.height = Math.abs(yCheck) + "px";
    divRef.current.style.width = Math.abs(xCheck) + "px";
  };

  
export const handleMouseUp = (e: MouseEvent) => {
    // console.log("testing");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    // customAddEventListener("remove", "mousemove", handleMouseMove, startCursor);
    // customAddEventListener("remove", "mouseup", handleMouseUp, startCursor);
  };
