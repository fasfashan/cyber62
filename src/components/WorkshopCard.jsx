import React from "react";

const WorkshopCard = ({
  title,
  image,
  startDate,
  endDate,
  year,
  price,
  location,
  type,
}) => {
  // Determine background and styling based on workshop type
  const getCardStyle = () => {
    switch (type) {
      case "technology":
        return {
          background: "bg-gradient-to-br from-gray-200 to-gray-300",
          badge: "TECHNOLOGY TECHDESIGN",
        };
      case "security":
        return {
          background: "bg-gradient-to-br from-blue-400 to-blue-600",
          badge: "",
        };
      case "defense":
        return {
          background: "bg-gradient-to-br from-blue-800 to-blue-900",
          badge: "",
        };
      default:
        return {
          background: "bg-gradient-to-br from-gray-200 to-gray-300",
          badge: "TECHNOLOGY TECHDESIGN",
        };
    }
  };

  const cardStyle = getCardStyle();

  return (
    <div className="rounded-4xl border hover:border-none hover:shadow-xl hover:shadow-teal border-teal overflow-hidden shadow-lg h-full cursor-pointer group">
      <div className={`relative h-fit ${cardStyle.background} overflow-hidden`}>
        {/* Workshop image with zoom effect on hover */}
        {image && (
          <div className="overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
      </div>

      <div className="p-4 bg-darkblue h-full text-grey transition-colors duration-300 group-hover:bg-lightgrey group-hover:text-black">
        <h3 className="mb-2 transition-colors duration-300 group-hover:text-darkblue ">
          {title}
        </h3>
        <div className="text-grey/50 font-bold mb-2 transition-colors duration-300 group-hover:text-darkgrey">
          {startDate} - {endDate} {year}
        </div>
        <div className="font-bold mb-2 border-b border-grey pb-4 transition-colors duration-300 group-hover:text-darkblue group-hover:border-darkblue">
          {price}
        </div>
        <div className="text-sm text-grey transition-colors duration-300 group-hover:text-darkblue">
          {location}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
