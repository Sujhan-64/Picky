"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ isLoggedIn, onLoginClick, onLogout, cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-soft-blue-dark to-soft-green-dark bg-clip-text text-transparent">
              PickyArtZ
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
            >
              Contact
            </Link>

            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative flex items-center px-3 py-2 rounded-md hover:bg-[#fef4f6] transition-colors"
            >
              <ShoppingCart className="text-gray-700 hover:text-soft-blue-dark transition-colors" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-soft-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <Button
                onClick={onLoginClick}
                className="bg-soft-blue hover:bg-soft-blue-dark text-gray-800 flex items-center gap-2 ml-2"
              >
                <LogIn size={16} />
                Login
              </Button>
            ) : (
              <Button
                onClick={onLogout}
                variant="outline"
                className="flex items-center gap-2 ml-2"
              >
                <LogOut size={16} />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="px-2 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="px-2 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="px-2 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="px-2 py-2 rounded-md text-gray-700 hover:bg-[#fef4f6] hover:text-soft-blue-dark transition-colors"
              >
                Contact
              </Link>

              <div className="px-2 pt-2 border-t border-gray-200 space-y-2">
                {/* Cart Icon Mobile */}
                <button
                  onClick={onCartClick}
                  className="relative flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#fef4f6] transition-colors"
                >
                  <ShoppingCart size={18} />
                  Cart
                  {cartCount > 0 && (
                    <span className="ml-1 bg-soft-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Auth Buttons */}
                {!isLoggedIn ? (
                  <Button
                    onClick={onLoginClick}
                    className="bg-soft-blue hover:bg-soft-blue-dark text-gray-800 flex items-center gap-2 w-full"
                  >
                    <LogIn size={16} />
                    Login
                  </Button>
                ) : (
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    className="flex items-center gap-2 w-full"
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
