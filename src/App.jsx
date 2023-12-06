import { useState } from "react";
import { CartProvider } from "./components/context/CartProvider";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layouts/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (
    <>
      <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Hero />
        <Products />
      </CartProvider>
    </>
  );
}

export default App;
