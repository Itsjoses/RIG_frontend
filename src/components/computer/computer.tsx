import React from 'react'

interface Props{
    children: React.ReactNode,
    id: string
}

export default function Computer({children, id} : Props) {
  return (
    <div id={id} className='computer border-1 shadow-[0_1px_2px_rgba(0,0,0,0.3)] rounded-md p-4 select-none'>{children}</div>
  )
}
