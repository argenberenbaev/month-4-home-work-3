
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Рюкзак",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
    {
      id: 2,
      name: "Бутылка для воды",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    },
    {
      id: 3,
      name: "Фонарик",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  return (
    <div className="shop">
      <h1>Магазин путешественника</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
