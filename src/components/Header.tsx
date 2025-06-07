import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>ShopHub</h1>
          </Link>

          <nav className="nav">
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16,17 21,12 16,7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Account
            </button>
            <button className="btn btn-primary cart-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="m1 1 4 4 2 11h12" />
              </svg>
              Cart (0)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
