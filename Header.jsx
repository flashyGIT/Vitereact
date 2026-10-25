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

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
