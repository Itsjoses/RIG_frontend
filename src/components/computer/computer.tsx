import React, { useRef } from 'react'
import { UilDesktop } from '@iconscout/react-unicons'

interface Props{
    children: React.ReactNode,
    id: string
}

export default function Computer({children, id} : Props) {
  const computerRef = useRef<HTMLDivElement | null>(null);

const toggleSelected = () => {
  if (computerRef.current?.classList.contains('selected')) {
    computerRef.current!.classList.remove('selected');
    computerRef.current!.classList.remove('shadow-selectedShadow');
    computerRef.current!.classList.add("shadow-[0_1px_2px_rgba(0,0,0,0.3)]");
  }else{
    computerRef.current!.classList.add('selected');
    computerRef.current!.classList.add('shadow-selectedShadow');
    computerRef.current!.classList.remove("shadow-[0_1px_2px_rgba(0,0,0,0.3)]");
  }
};

  return (
    <div ref={computerRef} onClick={toggleSelected} id={id} className='computer border-1 shadow-[0_1px_2px_rgba(0,0,0,0.3)] rounded-sm py-2 px-4 select-none flex flex-col jusitfy-center items-center'><UilDesktop size="20"/><p>{children}</p></div>
  )
}
