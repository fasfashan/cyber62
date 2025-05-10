"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items, itemsPerSlide = 3, renderItem }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerSlide);
  const [showNavigation, setShowNavigation] = useState(false);

  // Calculate total slides based on items and items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(itemsPerSlide);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemsPerSlide]);

  useEffect(() => {
    const slides = Math.ceil(items.length / itemsPerView);
    setTotalSlides(slides);
    setShowNavigation(slides > 1);

    // Reset active slide if it's out of bounds after resize
    if (activeSlide >= slides) {
      setActiveSlide(0);
    }
  }, [items, itemsPerView, activeSlide]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Get current visible items
  const getCurrentItems = () => {
    const startIndex = activeSlide * itemsPerView;
    return items.slice(startIndex, startIndex + itemsPerView);
  };

  // Check if current slide is the last slide
  const isLastSlide = activeSlide === totalSlides - 1;

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 transition-all duration-500 ease-in-out">
          {getCurrentItems().map((item) => (
            <div key={item.id} className="w-full ">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons - only show if there are multiple slides */}
      {showNavigation && (
        <>
          {/* Previous button - only show if not on first slide */}
          {activeSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-teal-500 text-white rounded-full p-2 shadow-lg z-10 hover:bg-teal-600 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button - only show if not on last slide */}
          {!isLastSlide && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-teal-500 text-white rounded-full p-2 shadow-lg z-10 hover:bg-teal-600 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </>
      )}

      {/* Pagination indicators - always show */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === index ? "bg-teal-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
