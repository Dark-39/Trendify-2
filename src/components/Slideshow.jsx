import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slideshow.css";

const slides = [
  {
    id: 1,
    title: "New Spring Collection",
    subtitle: "Fresh Styles for 2024",
    description:
      "Discover our latest spring arrivals featuring vibrant colors and contemporary designs that define modern fashion.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    cta: {
      text: "Shop Spring Collection",
      link: "/products?gender=New",
    },
    theme: "light",
  },
  {
    id: 2,
    title: "Men's Premium Line",
    subtitle: "Sophisticated Elegance",
    description:
      "Elevate your wardrobe with our premium men's collection. Tailored perfection meets contemporary style.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    cta: {
      text: "Explore Men's Fashion",
      link: "/products?gender=Mens",
    },
    theme: "dark",
  },
  {
    id: 3,
    title: "Women's Luxury",
    subtitle: "Timeless Beauty",
    description:
      "Embrace your femininity with our exquisite women's collection. From casual chic to evening glamour.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=600&fit=crop",
    cta: {
      text: "Shop Women's Style",
      link: "/products?gender=Womens",
    },
    theme: "light",
  },
  {
    id: 4,
    title: "Accessories Collection",
    subtitle: "Perfect Finishing Touches",
    description:
      "Complete your look with our curated selection of premium accessories. Details that make the difference.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1200&h=600&fit=crop",
    cta: {
      text: "Browse Accessories",
      link: "/products?gender=Accessories",
    },
    theme: "dark",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""} ${slide.theme}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="slide-overlay" />
            <div className="container">
              <div className="slide-content">
                <div className="slide-text">
                  <span className="slide-subtitle">{slide.subtitle}</span>
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-actions">
                    <Link
                      to={slide.cta.link}
                      className="btn btn-primary btn-lg slide-cta"
                    >
                      {slide.cta.text}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7,7 17,7 17,17" />
                      </svg>
                    </Link>
                    <button className="btn btn-secondary btn-lg slide-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <button
          className="slide-nav slide-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>

        <button
          className="slide-nav slide-nav-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slide-indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="slide-progress">
          <div
            className="slide-progress-bar"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>

        {/* Auto-play Toggle */}
        <button
          className={`autoplay-toggle ${isAutoPlaying ? "playing" : "paused"}`}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
