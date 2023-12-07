// import products from "../productData.js";
import { useState } from "react";
import ProductItem from "./ProductItem.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      let products = await response.json();
      products = products.map((product) => {
        return {
          id: product._id,
          name: product.title,
          ...product,
        };
      });

      setProducts(products);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  let content = <p>Found no products</p>;

  if (products.length > 0) {
    content = productList;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <main className="container mx-auto my-10">
      <ul className="grid grid-cols-4 gap-10">{content}</ul>
      
      <button className="default-btn" onClick={fetchProducts}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;
