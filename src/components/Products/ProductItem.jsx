import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Card from "../UI/Card";
import Rating from "./Rating";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;

  const { addItem } = useContext(CartContext);

  return (
    <Card className="space-y-4">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="flex justify-between">
        <Rating />
        <span>{price}₺</span>
      </div>
      <button
        className="bg-green-700 py-2 px-6 text-white rounded-lg w-full my-2"
        onClick={() => addItem(product)}
      >
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;
