interface mouseCoord {
    x: number;
    y: number;
  }

  export const GetCursorCoordinate = (e: MouseEvent, divRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (divRef.current) {
      return {
        x: e.clientX - divRef.current.getBoundingClientRect().left,
        y: e.clientY - divRef.current.getBoundingClientRect().top,
      };
    } else {
      return null;
    }
  };