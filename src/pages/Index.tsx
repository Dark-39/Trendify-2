import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Home.css";

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="page">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Discover Amazing Products</h1>
            <p className="hero-description">
              Shop the latest trends and find everything you need in our
              carefully curated collection
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <button className="btn btn-secondary btn-lg">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Shopping experience"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked items that our customers love most</p>
          </div>

          <div className="products-grid grid grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => {
                  // Navigate to product detail or add to cart functionality
                  console.log("Product clicked:", product.name);
                }}
              />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Find exactly what you're looking for</p>
          </div>

          <div className="categories-grid grid grid-cols-3">
            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop"
                  alt="Electronics"
                />
              </div>
              <div className="category-content">
                <h3>Electronics</h3>
                <p>Latest gadgets and tech</p>
                <Link
                  to="/products?category=Electronics"
                  className="btn btn-primary"
                >
                  Explore
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop"
                  alt="Fashion"
                />
              </div>
              <div className="category-content">
                <h3>Fashion</h3>
                <p>Trendy clothing and accessories</p>
                <Link
                  to="/products?category=Clothing"
                  className="btn btn-primary"
                >
                  Explore
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                  alt="Home & Living"
                />
              </div>
              <div className="category-content">
                <h3>Home & Living</h3>
                <p>Furniture and home decor</p>
                <Link
                  to="/products?category=Furniture"
                  className="btn btn-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter and get exclusive deals and updates
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ShopHub</h3>
              <p>
                Your one-stop destination for amazing products and exceptional
                shopping experience.
              </p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <a href="#support">Support Center</a>
                </li>
                <li>
                  <a href="#shipping">Shipping Info</a>
                </li>
                <li>
                  <a href="#returns">Returns</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                <a href="#" aria-label="LinkedIn">
                  💼
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
