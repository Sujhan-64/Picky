"use client"
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";

const PriceSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen(prev => !prev);

  return (
    <div className="border border-black-2.5 px-1.5 py-2 mr-3">
      <div
        className="flex items-center justify-between cursor-pointer p-4 select-none"
        onClick={toggleSlider}
      >
        <span className="text-base font-medium">Price</span>
        <span className="text-sm">▼</span>
      </div>

      {isOpen && (
        <div className="px-4 pb-4">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      )}
    </div>
  );
};

export default PriceSlider;
