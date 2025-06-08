import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Basic password validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - in real app, this would come from your authentication API
      const userData = {
        id: Date.now(), // Simple ID generation
        name: formData.name,
        email: formData.email,
      };

      // Store user data
      localStorage.setItem("user", JSON.stringify(userData));

      // Trigger a custom event to update header
      window.dispatchEvent(new Event("userLoggedIn"));

      // Redirect to home page
      navigate("/");

      console.log("Signup successful:", userData);
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const userData = {
        id: Date.now(),
        name: "Google User",
        email: "google.user@gmail.com",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("userLoggedIn"));
      navigate("/");

      console.log("Google sign-up successful");
    } catch (error) {
      setError("Google sign-up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Panel - Form */}
        <div className="auth-form-panel">
          <div className="auth-form-container">
            <h1 className="auth-title">Getting Started</h1>

            {error && (
              <div
                className="error-message"
                style={{
                  background: "#fee2e2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontSize: "0.875rem",
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Input Name"
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Input Email"
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Input Password"
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-container">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <div className="auth-divider">
              <div className="divider-line"></div>
              <span className="divider-text">Or</span>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="google-signin-btn"
              disabled={isLoading}
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7141 10.9599H21.875V10.9166H12.5V15.0833H18.387C17.5281 17.5088 15.2203 19.25 12.5 19.25C9.04843 19.25 6.25 16.4515 6.25 13C6.25 9.54842 9.04843 6.74998 12.5 6.74998C14.0932 6.74998 15.5427 7.35102 16.6464 8.33279L19.5927 5.38644C17.7323 3.65258 15.2437 2.58331 12.5 2.58331C6.74739 2.58331 2.08333 7.24738 2.08333 13C2.08333 18.7526 6.74739 23.4166 12.5 23.4166C18.2526 23.4166 22.9167 18.7526 22.9167 13C22.9167 12.3015 22.8448 11.6198 22.7141 10.9599Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.28438 8.15154L6.70677 10.6614C7.63282 8.36873 9.87552 6.74998 12.5 6.74998C14.0932 6.74998 15.5427 7.35102 16.6464 8.33279L19.5927 5.38644C17.7323 3.65258 15.2438 2.58331 12.5 2.58331C8.49896 2.58331 5.02917 4.84217 3.28438 8.15154Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.5 23.4167C15.1906 23.4167 17.6354 22.387 19.4839 20.7125L16.2599 17.9844C15.2141 18.7766 13.9141 19.25 12.5 19.25C9.79062 19.25 7.4901 17.5224 6.62344 15.1115L3.22656 17.7286C4.95052 21.1021 8.45156 23.4167 12.5 23.4167Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.7141 10.9599H21.875V10.9167H12.5V15.0834H18.387C17.9745 16.2485 17.225 17.2531 16.2583 17.9849L16.2599 17.9839L19.4839 20.712C19.2557 20.9193 22.9167 18.2084 22.9167 13C22.9167 12.3016 22.8448 11.6198 22.7141 10.9599Z"
                  fill="#1976D2"
                />
              </svg>
              {isLoading ? "Signing up..." : "Sign in with Google"}
            </button>

            <div className="auth-footer">
              <span>Have an account? </span>
              <Link to="/login" className="auth-link">
                Log in
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="auth-image-panel">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1024&fit=crop"
            alt="Fashion collection"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
