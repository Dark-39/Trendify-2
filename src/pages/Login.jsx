import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in clicked");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Panel - Form */}
        <div className="auth-form-panel">
          <div className="auth-form-container">
            <h1 className="auth-title">Welcome Back!</h1>

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
                  />
                </div>
              </div>

              <button type="submit" className="auth-submit-btn">
                Sign In
              </button>

              <div className="forgot-password">
                <span>Forgot password? </span>
                <Link to="/forgot-password" className="auth-link">
                  Click Here
                </Link>
              </div>
            </form>

            <div className="auth-divider">
              <div className="divider-line"></div>
              <span className="divider-text">Or</span>
            </div>

            <button onClick={handleGoogleSignIn} className="google-signin-btn">
              <svg
                width="25"
                height="25"
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
              Sign in with Google
            </button>

            <div className="auth-footer">
              <span>Don't have an account? </span>
              <Link to="/signup" className="auth-link">
                Sign Up
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
