interface Props{
    children: React.ReactNode,
    callback: () => void
}

export function BlueButton({children, callback} : Props) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md drop-shadow-md min-w-[90px] select-none" onClick={callback}>{children}</button>
  )
}

export function RedButton({children, callback} : Props){
    return (
        <button className="bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded-md drop-shadow-md min-w-[90px]" onClick={callback}>{children}</button>
      )
}
