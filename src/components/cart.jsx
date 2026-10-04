import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
  return (
    <main>
      <h1>Your Cart</h1>

      {products.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default CartPage;
