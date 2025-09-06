"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from '../store/user-store';
const GetUserDetails = () => {

  const {uid} = useUser();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!uid){
      window.alert("Uid Not found... Please Sign up again");
      return;
    }

    const res = await fetch("/api/user",{
      method: "PUT",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({uid,name,dob})
    })

    if(!res.ok){
      console.log("Error POSTING User data in mongo atlas");
    }
  }
  return (
    
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
        <p className="mt-4 text-gray-600">
          Enter your <span className="font-semibold">Name</span> and{" "}
          <span className="font-semibold">Date of Birth</span> to start your shopping spree !!
        </p>
      </div>


      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" action="#" onSubmit = {handleSubmit}>
        {/* Name Field */}
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <div className="relative">
            <input
              placeholder="Name"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Date of Birth Field */}
        <div>
          <label className="sr-only" htmlFor="dob">Date of Birth</label>
          <div className="relative">
            <input
              placeholder="Date of Birth"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              id="dob"
              type="date"
              onChange={(e) => setDob(e.target.value)}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            No account yet?{" "}
            <a href="#" className="underline">Create one</a>
          </p>
          <button
            className="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default GetUserDetails;
