import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";

const Cart = ({ onClose }) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);

  const cartItems = (
    <ul>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );

  return (
    // Off Canvas
    <Offcanvas onClose={onClose}>
      {/* Content */}
      <div>
        {/* Cart Header */}
        <div className="flex justify-between items-center px-2 py-4 border-b">
          <h2 className="text-2xl font-bold">Sepetim</h2>
          <a className="text-2xl font-bold" href="/" onClick={onClose}>
            X
          </a>
        </div>

        {/* Cart Items */}
        {cartItems}

        <div className="flex justify-between px-2 mt-4">
          <span className="text-xl font-bold">Toplam Değer</span>
          <span className="text-xl font-bold">{totalAmount.toFixed(2)}₺</span>
        </div>
        {items.length > 0 && (
          <div className="flex flex-col mt-4 px-2 space-y-2">
            <button className="border rounded-xl p-2 bg-green-600 text-white">
              Sipariş Ver
            </button>
            <button
              className="border rounded-xl p-2 bg-red-600 text-white"
              onClick={clearItem}
            >
              Temizle
            </button>
          </div>
        )}
      </div>
    </Offcanvas>
  );
};

export default Cart;
