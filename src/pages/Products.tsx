import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ImageGallery from "../components/ImageGallery";
import { products, categories, Product } from "../data/products";
import "./Products.css";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy, searchTerm]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="page">
      <Header />

      <main className="products-page">
        <div className="container">
          {/* Page Header */}
          <div className="page-header">
            <h1>Shop Collection</h1>
            <p>Discover our curated selection of timeless fashion pieces</p>
          </div>

          {/* Filters and Search */}
          <div className="filters-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for styles, colors, or occasions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <svg
                className="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            <div className="filter-controls">
              <div className="category-filter">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sort-filter">
                <label htmlFor="sort">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              Showing {filteredAndSortedProducts.length} of {products.length}{" "}
              styles
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="products-grid grid grid-cols-3">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No styles found</h3>
              <p>
                Try adjusting your search or filter criteria to find more
                options
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeProductModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeProductModal}
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-body">
              <div className="product-gallery">
                <ImageGallery
                  images={selectedProduct.images}
                  productName={selectedProduct.name}
                />
              </div>

              <div className="product-details">
                <div className="product-category-badge">
                  {selectedProduct.category}
                </div>

                <h2 className="product-title">{selectedProduct.name}</h2>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < Math.floor(selectedProduct.rating) ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                <p className="product-description-full">
                  {selectedProduct.description}
                </p>

                <div className="product-pricing-large">
                  <div className="price-container">
                    <span className="current-price">
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                    {selectedProduct.originalPrice &&
                      selectedProduct.originalPrice > selectedProduct.price && (
                        <span className="original-price">
                          ${selectedProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                  </div>

                  {selectedProduct.originalPrice &&
                    selectedProduct.originalPrice > selectedProduct.price && (
                      <div className="discount-info">
                        Save $
                        {(
                          selectedProduct.originalPrice - selectedProduct.price
                        ).toFixed(2)}
                      </div>
                    )}
                </div>

                {/* Size Selection */}
                {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                  <div className="size-selection">
                    <label>Size:</label>
                    <div className="size-options">
                      {selectedProduct.sizes.map((size) => (
                        <button key={size} className="size-option">
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {selectedProduct.colors &&
                  selectedProduct.colors.length > 0 && (
                    <div className="color-selection">
                      <label>Color:</label>
                      <div className="color-options">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            className="color-option"
                            title={color}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="product-actions">
                  <button
                    className="btn btn-primary btn-lg"
                    disabled={!selectedProduct.inStock}
                  >
                    {selectedProduct.inStock ? "Add to Bag" : "Out of Stock"}
                  </button>
                  <button className="btn btn-secondary btn-lg">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Wishlist
                  </button>
                </div>

                <div className="product-info-list">
                  <div className="info-item">
                    <strong>Category:</strong> {selectedProduct.category}
                  </div>
                  <div className="info-item">
                    <strong>Availability:</strong>
                    <span
                      className={
                        selectedProduct.inStock ? "in-stock" : "out-of-stock"
                      }
                    >
                      {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong>Style #:</strong> SV-
                    {selectedProduct.id.toString().padStart(4, "0")}
                  </div>
                  <div className="info-item">
                    <strong>Care:</strong> Machine wash cold, hang dry
                  </div>
                </div>

                <div className="size-guide-link">
                  <a href="#size-guide" className="text-link">
                    📏 Size Guide & Fit Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
