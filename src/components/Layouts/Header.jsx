import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <header className="border-b fixed top-0 w-full bg-white">
      <div className="flex justify-between w-full container mx-auto items-center h-[89px]">
        <h1 className="text-[32px] font-bold tracking-wider">Trend Shop</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </div>
    </header>
  );
};

export default Header;
