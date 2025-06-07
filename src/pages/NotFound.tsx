import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div className="page">
      <Header />
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              maxWidth: "400px",
            }}
          >
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved or deleted.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <Link to="/products" className="btn btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
