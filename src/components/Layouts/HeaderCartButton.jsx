import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../context/CartProvider";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const totalItemsInCart = cartCtx.items.reduce((acc, currentItem) => {
    return (acc = acc + currentItem.amount);
  }, 0);

  return (
    <>
      <button
        className="flex items-center space-x-2 rounded-3xl p-3 px-14 bg-green-700 text-white hover:bg-black hover:text-white [&>*:last-child]:hover:text-black [&>*:last-child]:hover:bg-green-700 duration-100"
        onClick={onShowCart}
      >
        <CartIcon />
        <span>Sepetim</span>
        <span className="w-10 h-8 rounded-full bg-black items-center flex justify-center">
          {totalItemsInCart}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
