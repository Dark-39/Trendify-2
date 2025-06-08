import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - in real app, this would come from your authentication API
      const userData = {
        id: 1,
        name: formData.name,
        email: `${formData.name.toLowerCase().replace(" ", "")}@example.com`,
      };

      // Store user data
      localStorage.setItem("user", JSON.stringify(userData));

      // Trigger a custom event to update header
      window.dispatchEvent(new Event("userLoggedIn"));

      // Redirect to home page
      navigate("/");

      console.log("Login successful:", userData);
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error("Login error:", error);
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
        id: 2,
        name: "Google User",
        email: "google.user@gmail.com",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("userLoggedIn"));
      navigate("/");

      console.log("Google sign-in successful");
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
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
            <div className="auth-header">
              <h1 className="auth-title">Welcome Back!</h1>
              <p className="auth-subtitle">
                Sign in to continue your shopping journey
              </p>
            </div>

            {error && (
              <div className="error-message animate-slide-down">
                <svg
                  className="error-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <div
                  className={`input-container ${focusedField === "name" ? "focused" : ""} ${formData.name ? "filled" : ""}`}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="name" className="floating-label">
                    <svg
                      className="input-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Name
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div
                  className={`input-container ${focusedField === "password" ? "focused" : ""} ${formData.password ? "filled" : ""}`}
                >
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={handleBlur}
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="password" className="floating-label">
                    <svg
                      className="input-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`auth-submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading && <div className="loading-spinner"></div>}
                <span className={isLoading ? "loading-text" : ""}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </span>
              </button>

              <div className="forgot-password">
                <Link to="/forgot-password" className="auth-link">
                  <svg
                    className="link-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Forgot password?
                </Link>
              </div>
            </form>

            <div className="auth-divider">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className={`google-signin-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              <svg
                className="google-icon"
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7141 10.4599H21.875V10.4167H12.5V14.5834H18.387C17.5281 17.0089 15.2203 18.75 12.5 18.75C9.04843 18.75 6.25 15.9516 6.25 12.5C6.25 9.04848 9.04843 6.25004 12.5 6.25004C14.0932 6.25004 15.5427 6.85108 16.6464 7.83285L19.5927 4.8865C17.7323 3.15264 15.2438 2.08337 12.5 2.08337C6.74739 2.08337 2.08333 6.74744 2.08333 12.5C2.08333 18.2526 6.74739 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.28438 7.6516L6.70677 10.1615C7.63282 7.86879 9.87552 6.25004 12.5 6.25004C14.0932 6.25004 15.5427 6.85108 16.6464 7.83285L19.5927 4.8865C17.7323 3.15264 15.2438 2.08337 12.5 2.08337C8.49896 2.08337 5.02917 4.34223 3.28438 7.6516Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2286C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.7141 10.4599H21.875V10.4166H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4838L19.4839 20.2119C19.2557 20.4192 22.9167 17.7083 22.9167 12.5C22.9167 11.8015 22.8448 11.1198 22.7141 10.4599Z"
                  fill="#1976D2"
                />
              </svg>
              <span>
                {isLoading ? "Signing in..." : "Continue with Google"}
              </span>
            </button>

            <div className="auth-footer">
              <span>Don't have an account? </span>
              <Link to="/signup" className="auth-link">
                <span>Sign Up</span>
                <svg
                  className="link-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="auth-image-panel">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1024&fit=crop"
            alt="Fashion shopping"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
