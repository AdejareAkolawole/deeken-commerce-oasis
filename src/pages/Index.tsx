
import { Search, ShoppingCart, User, Heart, Menu, Star, ArrowRight, Filter, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 234,
      badge: "Best Seller",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      badge: "Limited Time",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
      badge: "New Arrival",
      category: "Home"
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 49.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 312,
      badge: "Hot Deal",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 445,
      badge: "Popular",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Wireless Charging Stand",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 178,
      badge: "Sale",
      category: "Electronics"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "fa fa-mobile-alt", count: "2,450+ items" },
    { name: "Fashion", icon: "fa fa-tshirt", count: "5,230+ items" },
    { name: "Home & Garden", icon: "fa fa-home", count: "1,890+ items" },
    { name: "Sports", icon: "fa fa-futbol", count: "1,120+ items" },
    { name: "Books", icon: "fa fa-book", count: "3,670+ items" },
    { name: "Beauty", icon: "fa fa-spa", count: "2,340+ items" }
  ];

  const customerReviews = [
    {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c3?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "Amazing products and fast delivery! Highly recommend Deeken.",
      product: "Wireless Headphones"
    },
    {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      review: "Great quality and excellent customer service.",
      product: "Smart Watch"
    },
    {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "Best online shopping experience ever!",
      product: "Coffee Maker"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-900 shadow-lg">
        <div className="container mx-auto px-2 sm:px-4">
          {/* Top bar - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm text-white">
            <div className="flex items-center space-x-4">
              <span><i className="fa fa-phone mr-2"></i>+1 (555) 123-4567</span>
              <span><i className="fa fa-envelope mr-2"></i>support@deeken.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="animate-pulse">Free shipping on orders over $50</span>
              <select className="bg-transparent border-none text-sm">
                <option>EN</option>
                <option>FR</option>
                <option>ES</option>
              </select>
            </div>
          </div>
          
          {/* Main navigation */}
          <div className="flex items-center justify-between py-2 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-8">
              <h1 className="text-xl sm:text-3xl font-bold text-green-400 hover:scale-105 transition-transform cursor-pointer">
                DEEKEN
              </h1>
              <nav className="hidden lg:flex space-x-6 text-white">
                <a href="#" className="hover:text-green-300 transition-colors transform hover:scale-105">Home</a>
                <a href="#products" className="hover:text-green-300 transition-colors transform hover:scale-105">Products</a>
                <a href="#categories" className="hover:text-green-300 transition-colors transform hover:scale-105">Categories</a>
                <a href="#deals" className="hover:text-green-300 transition-colors transform hover:scale-105">Deals</a>
                <a href="#about" className="hover:text-green-300 transition-colors transform hover:scale-105">About</a>
              </nav>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 max-w-xs sm:max-w-xl mx-2 sm:mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 pr-10 sm:pr-12 rounded-full border-2 border-green-300 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <Search className="absolute right-2 sm:right-3 top-1.5 sm:top-2.5 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
            </div>
            
            {/* User actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 text-white">
              <Link to="/account" className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1 hover:text-green-300 transition-colors transform hover:scale-110">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm hidden sm:inline">Account</span>
              </Link>
              <button className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1 hover:text-green-300 transition-colors transform hover:scale-110">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm hidden sm:inline">Wishlist</span>
              </button>
              <button className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1 hover:text-green-300 transition-colors relative transform hover:scale-110">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm hidden sm:inline">Cart</span>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 bg-green-400 text-blue-900 rounded-full text-xs flex items-center justify-center font-bold animate-bounce">
                  3
                </span>
              </button>
              <button className="lg:hidden">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in order-2 md:order-1">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white animate-slide-in-right">
                Summer Sale
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-green-300">
                Up to 70% Off
              </h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white">
                Discover amazing deals on thousands of products. Limited time offer!
              </p>
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 bg-green-400 text-blue-900 hover:bg-green-500 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Shop Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            <div className="relative animate-scale-in order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                alt="Hero Product"
                className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-green-400 text-blue-900 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-blue-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 bg-white border-2 border-blue-100 hover:border-green-300">
                <CardContent className="p-3 sm:p-6 text-center">
                  <div className="text-2xl sm:text-4xl mb-2 sm:mb-3 text-blue-600 group-hover:text-green-500 transition-colors">
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base text-blue-900 group-hover:text-green-600 transition-colors">{category.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-8 sm:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
              All Products
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                <Grid className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 bg-white border-2 border-blue-100 hover:border-green-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-green-400 text-blue-900 rounded text-xs font-semibold">
                      {product.badge}
                    </div>
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-xs text-green-600 mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 line-clamp-2 text-sm sm:text-base text-blue-900 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? 'fill-current text-green-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm ml-2 text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base sm:text-lg font-bold text-blue-900">
                          ${product.price}
                        </span>
                        <span className="text-xs sm:text-sm line-through ml-2 text-gray-500">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-green-500 transition-all duration-300 text-xs sm:text-sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-blue-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {customerReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-100">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-blue-600 text-white">{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-blue-900">{review.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${i < review.rating ? 'fill-current text-green-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2 text-sm sm:text-base">"{review.review}"</p>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">Purchased: {review.product}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 sm:py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-200">
            Subscribe to our newsletter for exclusive deals and latest products
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border-2 border-green-300 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
            />
            <Button className="bg-green-400 text-blue-900 hover:bg-green-500 transition-all duration-300 px-6 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">DEEKEN</h3>
              <p className="mb-4 text-sm sm:text-base">Your trusted online marketplace for quality products at great prices.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-xl sm:text-2xl hover:text-green-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-xl sm:text-2xl hover:text-green-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="text-xl sm:text-2xl hover:text-green-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-xl sm:text-2xl hover:text-green-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#" className="hover:text-green-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Categories</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#" className="hover:text-green-300 transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Customer Service</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#" className="hover:text-green-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base">&copy; 2024 Deeken. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
