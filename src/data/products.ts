export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Button-Down Shirt",
    price: 89.99,
    originalPrice: 119.99,
    description:
      "Timeless white cotton button-down shirt perfect for office or casual wear. Made from premium 100% cotton with a tailored fit.",
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4ec2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 156,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
  },
  {
    id: 2,
    name: "High-Waisted Denim Jeans",
    price: 129.99,
    originalPrice: 149.99,
    description:
      "Vintage-inspired high-waisted jeans with a perfect fit. Made from sustainable denim with stretch for comfort.",
    category: "Bottoms",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 203,
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Dark Blue", "Light Wash", "Black"],
  },
  {
    id: 3,
    name: "Elegant Midi Dress",
    price: 159.99,
    description:
      "Sophisticated midi dress perfect for office or evening events. Features a flattering A-line silhouette with three-quarter sleeves.",
    category: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-40e0c1e7e7c5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 89,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Burgundy"],
  },
  {
    id: 4,
    name: "Cozy Knit Sweater",
    price: 99.99,
    originalPrice: 139.99,
    description:
      "Ultra-soft cashmere blend sweater perfect for layering. Features a relaxed fit and ribbed details.",
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1571513722275-4b3b4d303d52?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 134,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Charcoal", "Blush Pink"],
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: 199.99,
    originalPrice: 259.99,
    description:
      "Premium leather ankle boots with a comfortable block heel. Perfect for both casual and dressy occasions.",
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 167,
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["Black", "Brown", "Tan"],
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: 69.99,
    description:
      "Luxurious 100% silk scarf with an elegant floral pattern. Perfect accessory for any outfit.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 78,
    colors: ["Floral Navy", "Floral Pink", "Geometric Black"],
  },
  {
    id: 7,
    name: "Tailored Blazer",
    price: 249.99,
    originalPrice: 299.99,
    description:
      "Professional tailored blazer perfect for business meetings or smart-casual events. Classic fit with modern details.",
    category: "Outerwear",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-40e0c1e7e7c5?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 92,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Charcoal"],
  },
  {
    id: 8,
    name: "Summer Maxi Dress",
    price: 119.99,
    originalPrice: 149.99,
    description:
      "Flowing maxi dress perfect for summer events. Features a beautiful floral print and comfortable fit.",
    category: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 145,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink", "Solid Black"],
  },
  {
    id: 9,
    name: "Classic Trench Coat",
    price: 399.99,
    description:
      "Timeless trench coat perfect for transitional weather. Features a classic silhouette with modern updates.",
    category: "Outerwear",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.9,
    reviews: 67,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy"],
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 149.99,
    description:
      "Comfortable and stylish sneakers perfect for everyday wear. Made with sustainable materials.",
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 234,
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Gray"],
  },
];

export const categories = [
  "All",
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Accessories",
];
