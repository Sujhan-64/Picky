'use client';

import React, { useState } from 'react';

export default function AuthForm() {
  const [option, setOption] = useState(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#4D6FE5] font-sans text-white p-4">
      {/* Load Font - In Next.js proper, you'd usually do this in layout.js or via next/font */}


      <div className="w-full max-w-[400px] mt-12 sm:mt-24 font-nunito text-center">
        
        {/* Header with Sliding Text */}
        <header className="mb-10 sm:mb-14 relative mx-auto h-[30px] w-[280px] overflow-hidden text-xl sm:text-2xl font-bold">
          <div 
            className={`absolute flex w-full flex-col transition-transform duration-400 transition-custom
              ${option === 1 ? 'translate-y-0' : option === 2 ? '-translate-y-[35px]' : '-translate-y-[70px]'}
            `}
          >
            <span className="h-[26px] flex items-center justify-center">Sign in to your account</span>
            <span className="h-[35px] flex items-center justify-center">Create an account</span>
            <span className="h-[35px] flex items-center justify-center">Reset your password</span>
          </div>
        </header>

        {/* Navigation Tabs */}
        <ul className="flex items-center w-full max-w-[350px] mx-auto mb-8">
          <li 
            className={`cursor-pointer transition-opacity duration-200 hover:opacity-100 ${option === 1 ? 'opacity-100 font-bold' : 'opacity-50'}`}
            onClick={() => setOption(1)}
          >
            Sign in
          </li>
          <li 
            className={`cursor-pointer ml-4 transition-opacity duration-200 hover:opacity-100 ${option === 2 ? 'opacity-100 font-bold' : 'opacity-50'}`}
            onClick={() => setOption(2)}
          >
            Sign up
          </li>
          <li 
            className={`cursor-pointer ml-auto transition-opacity duration-200 hover:opacity-100 ${option === 3 ? 'opacity-100 font-bold' : 'opacity-50'}`}
            onClick={() => setOption(3)}
          >
            Forgot
          </li>
        </ul>

        {/* Form Area */}
        <form 
          className="flex flex-col" 
          onSubmit={(evt) => evt.preventDefault()}
        >
          {/* Dynamic Height Container 
             We use max-height for the transition effect similar to the original CSS.
          */}
          <div 
            className={`flex flex-col overflow-hidden transition-all duration-400 transition-custom w-full
              ${option === 1 ? 'max-h-[140px]' : option === 2 ? 'max-h-[280px]' : 'max-h-[70px]'}
            `}
          >
            {/* Name - visible during sign up */}
            <input 
              className={`mb-2.5 rounded border-0 p-4 text-base bg-white text-black placeholder-gray-400 focus:outline-none ring-2 ring-transparent focus:ring-blue-300/50 transition-all ${option !== 2 ? 'opacity-0' : 'opacity-100'}`}
              id='name' 
              name='name' 
              type='text' 
              placeholder='Name' 
              required={option === 2} 
              disabled={option !== 2} 
            />

            {/* Email - Always visible */}
            <input 
              className="mb-2.5 rounded border-0 p-4 text-base bg-white text-black placeholder-gray-400 focus:outline-none ring-2 ring-transparent focus:ring-blue-300/50 transition-all"
              id='email' 
              name='email' 
              type='email' 
              placeholder='E-mail' 
              required 
            />
            
            {/* Password - Hidden on Forgot */}
            <input 
              className={`mb-2.5 rounded border-0 p-4 text-base bg-white text-black placeholder-gray-400 focus:outline-none ring-2 ring-transparent focus:ring-blue-300/50 transition-all ${option === 3 ? 'opacity-0' : 'opacity-100'}`}
              id='password' 
              name='password' 
              type='password' 
              placeholder='Password' 
              required={option === 1 || option === 2} 
              disabled={option === 3} 
            />

            {/* Repeat Password - Only visible on Sign Up */}

            <input 
              className={`mb-2.5 rounded border-0 p-4 text-base bg-white text-black placeholder-gray-400 focus:outline-none ring-2 ring-transparent focus:ring-blue-300/50 transition-all ${option !== 2 ? 'opacity-0' : 'opacity-100'}`}
              id='repeat-password' 
              name='repeat-password' 
              type='password' 
              placeholder='Repeat password' 
              required={option === 2} 
              disabled={option !== 2} 
            />
          </div>

          {/* Submit Button */}
          <button 
            className="mt-4 w-full cursor-pointer rounded border-0 bg-[#5d7ce9] p-4 text-base text-white shadow-sm transition-colors duration-200 hover:bg-[#4261d4] focus:bg-[#3b56bb] focus:outline-none"
            type='submit'
          >
            {option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password')}
          </button>
        </form>

        <footer className="fixed bottom-0 left-0 w-full py-8 text-center">
          <a 
            href='https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page' 
            target='_blank' 
            rel="noopener noreferrer"
            className="text-white/80 font-bold hover:text-white transition-colors text-sm"
          >
            Original design with animations by Zenbu
          </a>
        </footer>
      </div>
    </div>
  );
}