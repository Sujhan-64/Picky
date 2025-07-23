"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
const Menu = () => {
  
  const [open,setOpen] = useState(false)

  return (
    <div>
      <Image
      src="/menu.png"
      alt=""
      height={28}
      width={28}
      className='cursor-pointer'
      onClick={() => setOpen((prev) => !prev)}/>

      {open &&(
        <div className="absolute right-0 mt-1 mr-60 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col">
          <Link
            href="#"
            className="px-4 py-2 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="px-4 py-2 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#"
            className="px-4 py-2 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="px-4 py-2 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
    
  )
}

export default Menu
