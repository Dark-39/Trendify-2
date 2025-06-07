import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>StyleVogue</h1>
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
                  Shop
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
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
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Bag (0)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
