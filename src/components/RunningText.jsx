import React, { useEffect, useRef, useState } from "react";

export default function RunningText() {
  const containerRef = useRef(null);
  const [duplicate, setDuplicate] = useState(1);

  // Items to be displayed in the running text
  const items = [
    "COMMUNITY",
    "EVENTS",
    "KNOWLEDGE",
    "COMMUNITY",
    "EVENTS",
    "KNOWLEDGE",
  ];

  useEffect(() => {
    // Calculate how many duplications we need to fill the screen
    const calculateDuplicates = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const singleWidth = containerRef.current.scrollWidth / duplicate;

      // We want to ensure the text fills more than the screen width
      // so we have smooth continuous scrolling
      const requiredDuplicates =
        Math.ceil((containerWidth * 2) / singleWidth) + 1;

      if (requiredDuplicates !== duplicate) {
        setDuplicate(requiredDuplicates);
      }
    };

    calculateDuplicates();
    window.addEventListener("resize", calculateDuplicates);

    return () => {
      window.removeEventListener("resize", calculateDuplicates);
    };
  }, [duplicate]);

  // Render multiple copies of the content for seamless scrolling
  const renderContent = () => {
    return Array(duplicate)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex">
          {items.map((item, itemIndex) => (
            <div
              key={`${index}-${itemIndex}`}
              className="flex items-center mx-3"
            >
              <span className="text-grey ">{item}</span>
              {itemIndex < items.length - 1 && (
                <span className=" mx-5 w-3 h-3 rounded-full border border-teal "></span>
              )}
            </div>
          ))}
        </div>
      ));
  };

  return (
    <div className="w-full  border-y border-teal mt-40 bg-gray-900 overflow-hidden py-2">
      <div ref={containerRef} className="flex font-display animate-marquee">
        {renderContent()}
      </div>

      {/* CSS for the animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
