import products from "../productData.js";
import ProductItem from "./ProductItem.jsx";

const Products = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <main className="container mx-auto my-10">
      <ul className="grid grid-cols-4 gap-10">{productList}</ul>
    </main>
  );
};

export default Products;
