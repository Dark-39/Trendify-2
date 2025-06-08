import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { products as initialProducts } from "../data/products.js";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("All");

  // Check admin access on component mount
  useEffect(() => {
    const checkAdminAccess = () => {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        // No user logged in, redirect to login
        navigate("/login");
        return;
      }

      try {
        const user = JSON.parse(savedUser);

        if (!user.isAdmin) {
          // User is not admin, redirect to home
          navigate("/");
          return;
        }

        // User is admin, allow access
        setIsAuthorized(true);
      } catch (error) {
        // Invalid user data, redirect to login
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      setIsLoading(false);
    };

    checkAdminAccess();
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    originalPrice: 0,
    description: "",
    category: "Tops",
    gender: "womens",
    images: [""],
    featured: false,
    inStock: true,
    rating: 0,
    reviews: 0,
    sizes: [],
    colors: [],
    isNew: false,
    createdAt: new Date().toISOString().split("T")[0],
  });

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender =
      filterGender === "All" || product.gender === filterGender.toLowerCase();
    return matchesSearch && matchesGender;
  });

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData(product);
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setFormData({
      name: "",
      price: 0,
      originalPrice: 0,
      description: "",
      category: "Tops",
      gender: "womens",
      images: [""],
      featured: false,
      inStock: true,
      rating: 0,
      reviews: 0,
      sizes: [],
      colors: [],
      isNew: false,
      createdAt: new Date().toISOString().split("T")[0],
    });
    setIsAdding(true);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (isAdding) {
      const newProduct = {
        ...formData,
        id: Math.max(...products.map((p) => p.id)) + 1,
      };
      setProducts([...products, newProduct]);
    } else if (isEditing && selectedProduct) {
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id
            ? { ...formData, id: selectedProduct.id }
            : p,
        ),
      );
    }
    setIsAdding(false);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== productId));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayInputChange = (field, value) => {
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    setFormData((prev) => ({
      ...prev,
      [field]: array,
    }));
  };

  // Show loading spinner while checking authorization
  if (isLoading) {
    return (
      <div className="page">
        <Header />
        <main className="admin-page">
          <div className="container">
            <div className="admin-loading">
              <div className="loading-spinner-large"></div>
              <p>Checking authorization...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // If not authorized, this won't render as user will be redirected
  if (!isAuthorized) {
    return (
      <div className="page">
        <Header />
        <main className="admin-page">
          <div className="container">
            <div className="access-denied">
              <h1>Access Denied</h1>
              <p>You don't have permission to access the admin panel.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <p>Manage your product inventory</p>
          </div>

          <div className="admin-controls">
            <div className="admin-search">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="admin-filters">
              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Genders</option>
                <option value="womens">Women's</option>
                <option value="mens">Men's</option>
                <option value="kids">Kids</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>

            <button onClick={handleAdd} className="btn btn-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Product
            </button>
          </div>

          <div className="admin-content">
            {/* Products List */}
            <div className="products-list">
              <h2>Products ({filteredProducts.length})</h2>

              <div className="products-table">
                <div className="table-header">
                  <div>Image</div>
                  <div>Name</div>
                  <div>Price</div>
                  <div>Category</div>
                  <div>Gender</div>
                  <div>Stock</div>
                  <div>Actions</div>
                </div>

                {filteredProducts.map((product) => (
                  <div key={product.id} className="table-row">
                    <div className="product-image-cell">
                      <img src={product.images[0]} alt={product.name} />
                    </div>
                    <div className="product-name-cell">
                      <span className="product-name">{product.name}</span>
                      {product.isNew && <span className="new-badge">NEW</span>}
                      {product.featured && (
                        <span className="featured-badge">FEATURED</span>
                      )}
                    </div>
                    <div className="price-cell">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice &&
                        product.originalPrice > product.price && (
                          <span className="original-price">
                            ${product.originalPrice}
                          </span>
                        )}
                    </div>
                    <div>{product.category}</div>
                    <div className="gender-cell">
                      {product.gender === "mens"
                        ? "Men's"
                        : product.gender === "womens"
                          ? "Women's"
                          : product.gender === "kids"
                            ? "Kids"
                            : "Unisex"}
                    </div>
                    <div
                      className={`stock-cell ${product.inStock ? "in-stock" : "out-of-stock"}`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </div>
                    <div className="actions-cell">
                      <button
                        onClick={() => handleEdit(product)}
                        className="btn btn-secondary btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Form */}
            {(isEditing || isAdding) && (
              <div className="product-form">
                <h2>{isAdding ? "Add New Product" : "Edit Product"}</h2>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      value={formData.name || ""}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "price",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Original Price (optional)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.originalPrice || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "originalPrice",
                          parseFloat(e.target.value) || undefined,
                        )
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Category</label>
                    <select
                      value={formData.category || "Tops"}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                      className="form-select"
                    >
                      <option value="Tops">Tops</option>
                      <option value="Bottoms">Bottoms</option>
                      <option value="Dresses">Dresses</option>
                      <option value="Outerwear">Outerwear</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      value={formData.gender || "womens"}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="form-select"
                    >
                      <option value="womens">Women's</option>
                      <option value="mens">Men's</option>
                      <option value="kids">Kids</option>
                      <option value="unisex">Unisex</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Rating</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "rating",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      className="form-textarea"
                      rows={3}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Images (comma-separated URLs)</label>
                    <input
                      type="text"
                      value={formData.images?.join(", ") || ""}
                      onChange={(e) =>
                        handleArrayInputChange("images", e.target.value)
                      }
                      className="form-input"
                      placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                    />
                  </div>

                  <div className="form-group">
                    <label>Sizes (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.sizes?.join(", ") || ""}
                      onChange={(e) =>
                        handleArrayInputChange("sizes", e.target.value)
                      }
                      className="form-input"
                      placeholder="S, M, L, XL"
                    />
                  </div>

                  <div className="form-group">
                    <label>Colors (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.colors?.join(", ") || ""}
                      onChange={(e) =>
                        handleArrayInputChange("colors", e.target.value)
                      }
                      className="form-input"
                      placeholder="Black, White, Blue"
                    />
                  </div>

                  <div className="form-group">
                    <label>Reviews Count</label>
                    <input
                      type="number"
                      value={formData.reviews || 0}
                      onChange={(e) =>
                        handleInputChange(
                          "reviews",
                          parseInt(e.target.value) || 0,
                        )
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-checkboxes">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.featured || false}
                        onChange={(e) =>
                          handleInputChange("featured", e.target.checked)
                        }
                      />
                      Featured Product
                    </label>

                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.inStock !== false}
                        onChange={(e) =>
                          handleInputChange("inStock", e.target.checked)
                        }
                      />
                      In Stock
                    </label>

                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.isNew || false}
                        onChange={(e) =>
                          handleInputChange("isNew", e.target.checked)
                        }
                      />
                      New Product
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button onClick={handleCancel} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button onClick={handleSave} className="btn btn-primary">
                    {isAdding ? "Add Product" : "Save Changes"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
