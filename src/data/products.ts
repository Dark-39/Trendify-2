export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  gender: "mens" | "womens" | "kids" | "unisex";
  images: string[];
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  createdAt: string;
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
    gender: "womens",
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
    isNew: true,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "High-Waisted Denim Jeans",
    price: 129.99,
    originalPrice: 149.99,
    description:
      "Vintage-inspired high-waisted jeans with a perfect fit. Made from sustainable denim with stretch for comfort.",
    category: "Bottoms",
    gender: "womens",
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
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Elegant Midi Dress",
    price: 159.99,
    description:
      "Sophisticated midi dress perfect for office or evening events. Features a flattering A-line silhouette with three-quarter sleeves.",
    category: "Dresses",
    gender: "womens",
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
    createdAt: "2024-01-08",
  },
  {
    id: 4,
    name: "Men's Classic Polo Shirt",
    price: 79.99,
    originalPrice: 99.99,
    description:
      "Premium cotton polo shirt with modern fit. Perfect for casual and smart-casual occasions.",
    category: "Tops",
    gender: "mens",
    images: [
      "https://images.unsplash.com/photo-1571513722275-4b3b4d303d52?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 134,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "White", "Gray"],
    isNew: true,
    createdAt: "2024-01-20",
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: 199.99,
    originalPrice: 259.99,
    description:
      "Premium leather ankle boots with a comfortable block heel. Perfect for both casual and dressy occasions.",
    category: "Shoes",
    gender: "womens",
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
    createdAt: "2024-01-05",
  },
  {
    id: 6,
    name: "Silk Designer Scarf",
    price: 89.99,
    description:
      "Luxurious 100% silk scarf with an elegant floral pattern. Perfect accessory for any outfit.",
    category: "Accessories",
    gender: "unisex",
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
    createdAt: "2024-01-12",
  },
  {
    id: 7,
    name: "Men's Tailored Suit Jacket",
    price: 349.99,
    originalPrice: 429.99,
    description:
      "Professional tailored suit jacket perfect for business meetings or formal events. Classic fit with modern details.",
    category: "Outerwear",
    gender: "mens",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-40e0c1e7e7c5?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 92,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Charcoal"],
    createdAt: "2024-01-03",
  },
  {
    id: 8,
    name: "Kids Rainbow Dress",
    price: 49.99,
    originalPrice: 69.99,
    description:
      "Colorful and comfortable dress for kids. Perfect for parties and special occasions.",
    category: "Dresses",
    gender: "kids",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 145,
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    colors: ["Rainbow", "Pink", "Blue"],
    isNew: true,
    createdAt: "2024-01-18",
  },
  {
    id: 9,
    name: "Classic Trench Coat",
    price: 399.99,
    description:
      "Timeless trench coat perfect for transitional weather. Features a classic silhouette with modern updates.",
    category: "Outerwear",
    gender: "womens",
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
    createdAt: "2024-01-01",
  },
  {
    id: 10,
    name: "Men's Casual Sneakers",
    price: 149.99,
    description:
      "Comfortable and stylish sneakers perfect for everyday wear. Made with sustainable materials.",
    category: "Shoes",
    gender: "mens",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 234,
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["White", "Black", "Gray"],
    createdAt: "2024-01-14",
  },
  {
    id: 11,
    name: "Kids Superhero T-Shirt",
    price: 24.99,
    description:
      "Fun superhero themed t-shirt for kids. Made from soft organic cotton.",
    category: "Tops",
    gender: "kids",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4ec2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 89,
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    colors: ["Blue", "Red", "Green"],
    isNew: true,
    createdAt: "2024-01-22",
  },
  {
    id: 12,
    name: "Designer Handbag",
    price: 299.99,
    originalPrice: 399.99,
    description:
      "Elegant designer handbag made from premium leather. Perfect for work or special occasions.",
    category: "Accessories",
    gender: "womens",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 234,
    colors: ["Black", "Brown", "Burgundy"],
    createdAt: "2024-01-16",
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

export const genderCategories = [
  "All",
  "New",
  "Mens",
  "Womens",
  "Kids",
  "Accessories",
];
