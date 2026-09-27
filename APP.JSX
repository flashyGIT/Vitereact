import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  // Product data is inside the App component and outside return.
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description:
        "Premium noise-cancelling headphones with 30-hour battery life",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches",
    },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    console.log("Added to cart:", product);

    setCart((currentCart) => [...currentCart, product]);
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Calculate the total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <main>
        <section className="products-section">
          <h1>Our Products</h1>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="cart-total">
                <strong>
                  Total: ${cartTotal.toFixed(2)}
                </strong>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
