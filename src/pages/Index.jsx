import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Slideshow from "../components/Slideshow.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";
import "./Home.css";

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);
  const newProducts = products.filter((product) => product.isNew);

  return (
    <div className="page">
      <Header />

      {/* Hero Slideshow */}
      <Slideshow />

      {/* New Arrivals Section */}
      {newProducts.length > 0 && (
        <section className="new-arrivals-section">
          <div className="container">
            <div className="section-header">
              <h2>New Arrivals</h2>
              <p>Fresh styles just added to our collection</p>
            </div>

            <div className="products-grid-responsive">
              {newProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="product-wrapper">
                  <ProductCard
                    product={product}
                    onClick={() => {
                      console.log("Product clicked:", product.name);
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="section-footer">
              <Link to="/products?gender=New" className="btn btn-secondary">
                Shop All New
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Shop by Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Find your perfect style match</p>
          </div>

          <div className="categories-grid-responsive">
            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop"
                  alt="New Arrivals"
                />
              </div>
              <div className="category-content">
                <h3>New</h3>
                <p>Latest fashion trends</p>
                <Link
                  to="/products?gender=New"
                  className="btn btn-primary category-btn"
                >
                  Shop New
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Men's Collection"
                />
              </div>
              <div className="category-content">
                <h3>Men's</h3>
                <p>Sophisticated style for him</p>
                <Link
                  to="/products?gender=Mens"
                  className="btn btn-primary category-btn"
                >
                  Shop Men's
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop"
                  alt="Women's Collection"
                />
              </div>
              <div className="category-content">
                <h3>Women's</h3>
                <p>Elegant fashion for her</p>
                <Link
                  to="/products?gender=Womens"
                  className="btn btn-primary category-btn"
                >
                  Shop Women's
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop"
                  alt="Accessories Collection"
                />
              </div>
              <div className="category-content">
                <h3>Accessories</h3>
                <p>Perfect finishing touches</p>
                <Link
                  to="/products?gender=Accessories"
                  className="btn btn-primary category-btn"
                >
                  Shop Accessories
                </Link>
              </div>
            </div>

            <div className="category-card card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"
                  alt="Kids Collection"
                />
              </div>
              <div className="category-content">
                <h3>Kids</h3>
                <p>Fun styles for little ones</p>
                <Link
                  to="/products?gender=Kids"
                  className="btn btn-primary category-btn"
                >
                  Shop Kids
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Styles</h2>
            <p>Curated pieces our stylists love this season</p>
          </div>

          <div className="products-grid-responsive">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-wrapper">
                <ProductCard
                  product={product}
                  onClick={() => {
                    console.log("Product clicked:", product.name);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/products" className="btn btn-secondary">
              Shop All Styles
            </Link>
          </div>
        </div>
      </section>

      {/* Style Inspiration Section */}
      <section className="inspiration-section">
        <div className="container">
          <div className="section-header">
            <h2>Style Inspiration</h2>
            <p>Get inspired by our latest fashion trends and styling tips</p>
          </div>

          <div className="inspiration-grid">
            <div className="inspiration-card">
              <div className="inspiration-image">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop"
                  alt="Workwear styling"
                />
              </div>
              <div className="inspiration-content">
                <h3>Office Chic</h3>
                <p>
                  Professional looks that transition from boardroom to happy
                  hour
                </p>
                <Link to="/products?category=Outerwear" className="style-link">
                  Shop the Look →
                </Link>
              </div>
            </div>

            <div className="inspiration-card">
              <div className="inspiration-image">
                <img
                  src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop"
                  alt="Weekend casual styling"
                />
              </div>
              <div className="inspiration-content">
                <h3>Weekend Vibes</h3>
                <p>Effortless casual pieces for your off-duty moments</p>
                <Link to="/products?category=Bottoms" className="style-link">
                  Shop the Look →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Trendify</h3>
              <p>
                Your destination for timeless fashion and contemporary style.
                Empowering confidence through beautiful clothing.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                <a href="#" aria-label="Pinterest">
                  📌
                </a>
                <a href="#" aria-label="TikTok">
                  🎵
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Shop</h4>
              <ul>
                <li>
                  <Link to="/products?gender=New">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/products?gender=Womens">Women's</Link>
                </li>
                <li>
                  <Link to="/products?gender=Mens">Men's</Link>
                </li>
                <li>
                  <Link to="/products?gender=Kids">Kids</Link>
                </li>
                <li>
                  <Link to="/products?gender=Accessories">Accessories</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Customer Care</h4>
              <ul>
                <li>
                  <a href="#size-guide">Size Guide</a>
                </li>
                <li>
                  <a href="#shipping">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#styling">Personal Styling</a>
                </li>
                <li>
                  <a href="#care">Care Instructions</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#story">Our Story</a>
                </li>
                <li>
                  <a href="#sustainability">Sustainability</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#press">Press</a>
                </li>
                <li>
                  <a href="#blog">Style Blog</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2024 Trendify. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
