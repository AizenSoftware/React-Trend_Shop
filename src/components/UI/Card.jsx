import React from "react";

const Card = ({ className, children }) => {
  return (
    <li
      className={`border p-4 h-fit bg-gray-50/40 shadow-xl rounded-lg mb-4 ${className}`}
    >
      {children}
    </li>
  );
};

export default Card;
