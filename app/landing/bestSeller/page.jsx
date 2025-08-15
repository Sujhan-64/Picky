"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BestSeller() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1638228626094-980cac59d7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deal of the Day",
      subtitle: "Up to 50% off on selected items",
    },
    {
      image: "https://images.unsplash.com/photo-1638228626094-980cac59d7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Premium Tech Collection",
      subtitle: "Latest gadgets and accessories",
    },
    {
      image: "https://images.unsplash.com/photo-1638228626094-980cac59d7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lifestyle Essentials",
      subtitle: "Curated products for modern living",
    },
    {
      image: "https://images.unsplash.com/photo-1638228626094-980cac59d7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Innovation Hub",
      subtitle: "Discover cutting-edge designs",
    },
    {
      image: "https://images.unsplash.com/photo-1638228626094-980cac59d7f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Natural Beauty",
      subtitle: "Eco-friendly and sustainable choices",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-b-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-64 md:h-80 lg:h-96"
            >
                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">
                            {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
