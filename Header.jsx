function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>My Store</h1>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>

        <span className="cart-badge">
          {cartCount}
        </span>
      </div>
    </header>
  );
}

export default Header;
