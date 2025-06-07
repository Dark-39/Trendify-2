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
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 199.99,
    originalPrice: 249.99,
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    description:
      "Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life.",
    category: "Wearables",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    description:
      "Comfortable organic cotton t-shirt available in multiple colors and sizes.",
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4ec2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 92,
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 899.99,
    description:
      "High-quality 24-70mm lens perfect for professional photography and videography.",
    category: "Photography",
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1624947593002-b9a7c014e5ff?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 449.99,
    originalPrice: 599.99,
    description:
      "Comfortable ergonomic office chair with lumbar support and adjustable height.",
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 78,
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    description:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    category: "Lifestyle",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 134,
  },
  {
    id: 7,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    description:
      "RGB mechanical gaming keyboard with customizable keys and tactile switches.",
    category: "Gaming",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 8,
    name: "Skincare Gift Set",
    price: 89.99,
    originalPrice: 120.0,
    description:
      "Complete skincare routine with cleanser, moisturizer, and serum for healthy skin.",
    category: "Beauty",
    images: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 167,
  },
];

export const categories = [
  "All",
  "Electronics",
  "Wearables",
  "Clothing",
  "Photography",
  "Furniture",
  "Lifestyle",
  "Gaming",
  "Beauty",
];
