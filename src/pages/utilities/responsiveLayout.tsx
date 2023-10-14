import React from 'react'

interface Props {
    children: React.ReactNode
}

export function ResponsiveLayout({children} : Props) {
  return (
    <div className='w-full'>
        <div className='xl:w-[1200px] lg:w-[1000px] md:w-[768px] mx-auto '>
            {children}
        </div>
    </div>
  )
}

export function ResponsiveLayoutBorder({children} : Props) {
    return (
      <div className='w-full border-b border-slate-200 bg-white'>
          <div className='xl:w-[1200px] lg:w-[1000px] md:w-[768px] mx-auto'>
              {children}
          </div>
      </div>
    )
  }

