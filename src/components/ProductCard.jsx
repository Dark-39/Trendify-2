import "./ProductCard.css";

const ProductCard = ({ product, onClick }) => {
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="product-card card" onClick={onClick}>
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        {hasDiscount && (
          <div className="discount-badge">-{discountPercentage}%</div>
        )}
        {!product.inStock && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>

        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-pricing">
          <div className="price-container">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            className="btn btn-primary add-to-cart-btn"
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
