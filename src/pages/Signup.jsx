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
  const [focusedField, setFocusedField] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(value);
    }

    // Clear error when user starts typing
    if (error) setError("");
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "#ef4444";
    if (passwordStrength <= 50) return "#f59e0b";
    if (passwordStrength <= 75) return "#3b82f6";
    return "#10b981";
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
            <div className="auth-header">
              <h1 className="auth-title">Getting Started</h1>
              <p className="auth-subtitle">
                Create your account to start shopping
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
                    Full Name
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div
                  className={`input-container ${focusedField === "email" ? "focused" : ""} ${formData.email ? "filled" : ""}`}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="email" className="floating-label">
                    <svg
                      className="input-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Address
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
                  {formData.password && (
                    <div className="password-strength">
                      <div className="strength-bar">
                        <div
                          className="strength-fill"
                          style={{
                            width: `${passwordStrength}%`,
                            backgroundColor: getPasswordStrengthColor(),
                          }}
                        ></div>
                      </div>
                      <span
                        className="strength-text"
                        style={{ color: getPasswordStrengthColor() }}
                      >
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div
                  className={`input-container ${focusedField === "confirmPassword" ? "focused" : ""} ${formData.confirmPassword ? "filled" : ""}`}
                >
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("confirmPassword")}
                    onBlur={handleBlur}
                    className="form-input"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="confirmPassword" className="floating-label">
                    <svg
                      className="input-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Confirm Password
                  </label>
                  {formData.confirmPassword && formData.password && (
                    <div className="password-match">
                      {formData.password === formData.confirmPassword ? (
                        <svg
                          className="match-icon success"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="match-icon error"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`auth-submit-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading && <div className="loading-spinner"></div>}
                <span className={isLoading ? "loading-text" : ""}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </span>
              </button>
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
              <span>
                {isLoading ? "Signing up..." : "Continue with Google"}
              </span>
            </button>

            <div className="auth-footer">
              <span>Already have an account? </span>
              <Link to="/login" className="auth-link">
                <span>Sign In</span>
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
