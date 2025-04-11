import React from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ stars }) => {
  
    
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < stars ? (
            <FaStar color="gold" size={14} />
          ) : (
            <FaStar color="gray" size={14} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
