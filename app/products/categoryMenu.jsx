"use client"
import React from 'react'
import { useState, useRef, useEffect } from "react";
import { CheckboxWithText } from '@/components/ui/checkbox';
import { CategoryItems } from '../data/data';
const CategoryMenu = () => {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <div className='flex flex-col flex-grow max-w-60 m-2.5 justify-center px-2.5 mr-3'>
            <div className="relative inline-block pl-3.5 pb-3 border border-black-2.5 top-0" ref={dropdownRef}>
                <button 
                    onClick={() => setOpen(!open)} 
                    className="px-4 py-2 text-black rounded-md border-none"
                >
                    <div className='flex gap-26'>
                        <div>
                            Menu
                        </div>
                        <div> 
                            ▼
                        </div>
                    </div>
                </button>

                {/* Dropdown Menu */}
                {open && (
                    <div className="left-0 mt-2 w-48 rounded-md">
                        {CategoryItems.map((item) =>(
                            <div className='mt-2.5'>
                                <CheckboxWithText text = {item.name}/>
                            </div>
                        ))
                        }
                
                    </div>
                )}
            </div>
    </div>
  )
}

export default CategoryMenu
