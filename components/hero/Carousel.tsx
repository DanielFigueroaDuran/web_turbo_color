'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
      '/assets/octoral.png',
      '/assets/cromauto.png',
      '/assets/indasa.png',
      '/assets/iwata.png',
      '/assets/rupes.png',
];

const Carousel = () => {
      const [current, setCurrent] = useState(2); // slide 3 es el activo por defecto

      const nextSlide = () => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      };

      const prevSlide = () => {
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };

      return (
            <div className="relative w-full bg-black rounded-lg">
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {images.map((image, idx) => (
                              <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-200 ease-linear ${idx === current ? 'opacity-100' : 'opacity-0'
                                          }`}
                              >
                                    <Image
                                          src={image}
                                          alt={`Slide ${idx + 1}`}
                                          fill
                                          className="object-contain"
                                          priority
                                    />
                              </div>
                        ))}
                  </div>

                  {/* Slider controls */}
                  <button
                        onClick={prevSlide}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center
                         h-full px-4 cursor-pointer group focus:outline-none"
                  >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30
                         dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 
                         group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                              <ChevronLeft className="w-4 h-4 text-white dark:text-gray-800" />
                              <span className="sr-only">Previous</span>
                        </span>
                  </button>
                  <button
                        onClick={nextSlide}
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer 
                        group focus:outline-none"                  >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                              <ChevronRight className="w-4 h-4 text-white dark:text-gray-800" />
                              <span className="sr-only">Next</span>
                        </span>
                  </button>
            </div>
      );
}

export default Carousel;