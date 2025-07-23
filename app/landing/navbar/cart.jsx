'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export default function Cart() {
  // Sample cart count. Replace with real cart logic or props.
  const [cartCount, setCartCount] = useState(3)

  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-gray-800">
        Cart
      </Link>

      <div className="relative">
        <Link href="/cart">
          <ShoppingCartIcon className="h-7 w-7 text-gray-700" />
        </Link>

        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  )
}
