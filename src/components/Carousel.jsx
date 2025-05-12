import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items, itemsPerSlide = 3, renderItem }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerSlide);
  const [showNavigation, setShowNavigation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate total slides based on items and items per slide
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
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

  // Check if current slide is the last slide
  const isLastSlide = activeSlide === totalSlides - 1;

  // Calculate translateX for smooth sliding
  const translateX = `-${activeSlide * 100}%`;

  // Group items into slides
  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerView) {
    slides.push(items.slice(i, i + itemsPerView));
  }

  return (
    <div className="relative">
      {/* Carousel container with overflow hidden */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(${translateX})` }}
        >
          {slides.map((slideItems, slideIndex) => (
            <div
              key={slideIndex}
              className="flex flex-nowrap gap-8 w-full flex-shrink-0 px-4"
            >
              {slideItems.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  } px-2`}
                >
                  {renderItem(item)}
                </div>
              ))}
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
              className={`absolute top-1/2 -translate-y-1/2 bg-teal text-white rounded-full p-2 shadow-lg z-10 hover:bg-teal transition-colors ${
                isMobile ? "left-2" : "left-0 -translate-x-1/2"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button - only show if not on last slide */}
          {!isLastSlide && (
            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -translate-y-1/2 bg-teal text-white rounded-full p-2 shadow-lg z-10 hover:bg-teal transition-colors ${
                isMobile ? "right-2" : "right-0 translate-x-1/2"
              }`}
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
              activeSlide === index ? "bg-teal" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
