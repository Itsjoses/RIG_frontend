import React from 'react'
import { ResponsiveLayoutBorder } from '../utilities/responsiveLayout'
import Link from 'next/link'

export default function Navbar() {
  return (
    <ResponsiveLayoutBorder>
        <div className="w-full flex justify-between">
          <div className="left px-4 py-3 gap-6 flex font-bold">
            <Link href={"/"} className="">Home</Link>
            <Link href={"/"}>Manage</Link>
            <Link href={"/"}>View</Link>
            <Link href={"/"}>Mikrotik Manager</Link>
          </div>

          <div className="right left px-4 py-3 font-bold">
            <Link href={"/"}>Sign Out</Link>
          </div>
        </div>
      </ResponsiveLayoutBorder>
  )
}
