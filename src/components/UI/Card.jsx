import React from "react";

const Card = ({ className, children }) => {
  return (
    <li
      className={`border p-4 bg-gray-50/40 shadow-xl rounded-lg ${className}`}
    >
      {children}
    </li>
  );
};

export default Card;
