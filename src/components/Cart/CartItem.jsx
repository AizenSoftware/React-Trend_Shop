import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="flex">
      <div className="flex justify-between items-center space-x-16 border-b mt-4 w-full px-2">
        <img className="w-16" src={item.img} alt={item.name} />
        <div className="flex justify-between items-center space-x-8">
          <div className="flex flex-col">
            <span>{item.name}</span>
            <div className="space-x-2">
              <span>{item.price}₺ x</span>
              <span className="text-green-600">{item.amount}</span>
            </div>
          </div>
          <a
            className="text-red-600"
            href="/"
            onClick={(e) => removeItem(e, item.id)}
          >
            X
          </a>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
