
import { Search, ShoppingCart, User, Heart, Menu, Star, ArrowRight } from "lucide-react";
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
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 234,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 299.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      badge: "Limited Time"
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 149.99,
      originalPrice: 199.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      badge: "New Arrival"
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 49.99,
      originalPrice: 79.99,
      image: "/placeholder.svg",
      rating: 4.3,
      reviews: 312,
      badge: "Hot Deal"
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
      avatar: "/placeholder.svg",
      rating: 5,
      review: "Amazing products and fast delivery! Highly recommend Deeken.",
      product: "Wireless Headphones"
    },
    {
      name: "Mike Chen",
      avatar: "/placeholder.svg",
      rating: 4,
      review: "Great quality and excellent customer service.",
      product: "Smart Watch"
    },
    {
      name: "Emily Davis",
      avatar: "/placeholder.svg",
      rating: 5,
      review: "Best online shopping experience ever!",
      product: "Coffee Maker"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-900 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-white">
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
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold text-orange-400 hover:scale-105 transition-transform cursor-pointer">
                DEEKEN
              </h1>
              <nav className="hidden md:flex space-x-6 text-white">
                <a href="#" className="hover:text-orange-300 transition-colors transform hover:scale-105">Home</a>
                <a href="#" className="hover:text-orange-300 transition-colors transform hover:scale-105">Categories</a>
                <a href="#" className="hover:text-orange-300 transition-colors transform hover:scale-105">Deals</a>
                <a href="#" className="hover:text-orange-300 transition-colors transform hover:scale-105">About</a>
                <a href="#" className="hover:text-orange-300 transition-colors transform hover:scale-105">Contact</a>
              </nav>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 pr-12 rounded-full border-2 border-orange-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-600" />
              </div>
            </div>
            
            {/* User actions */}
            <div className="flex items-center space-x-4 text-white">
              <Link to="/account" className="flex items-center space-x-1 hover:text-orange-300 transition-colors transform hover:scale-110">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Link>
              <button className="flex items-center space-x-1 hover:text-orange-300 transition-colors transform hover:scale-110">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Wishlist</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-orange-300 transition-colors relative transform hover:scale-110">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-orange-400 text-blue-900 rounded-full text-xs flex items-center justify-center font-bold animate-bounce">
                  3
                </span>
              </button>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-slide-in-right">
                Summer Sale
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300">
                Up to 70% Off
              </h3>
              <p className="text-lg mb-8 text-white">
                Discover amazing deals on thousands of products. Limited time offer!
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-orange-400 text-blue-900 hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/placeholder.svg" 
                alt="Hero Product"
                className="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-400 text-blue-900 rounded-full text-sm font-semibold animate-pulse">
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 bg-white border-2 border-blue-100 hover:border-orange-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 text-blue-600 group-hover:text-orange-500 transition-colors">
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="font-semibold mb-1 text-blue-900 group-hover:text-orange-600 transition-colors">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-blue-900">
              Featured Products
            </h2>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 bg-white border-2 border-blue-100 hover:border-orange-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-orange-400 text-blue-900 rounded text-xs font-semibold">
                      {product.badge}
                    </div>
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 text-blue-900 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current text-orange-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2 text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-blue-900">
                          ${product.price}
                        </span>
                        <span className="text-sm line-through ml-2 text-gray-500">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-orange-500 transition-all duration-300">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-blue-600 text-white">{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-blue-900">{review.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'fill-current text-orange-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">"{review.review}"</p>
                  <p className="text-sm text-blue-600 font-medium">Purchased: {review.product}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-lg mb-8 text-blue-200">
            Subscribe to our newsletter for exclusive deals and latest products
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border-2 border-orange-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            />
            <Button className="bg-orange-400 text-blue-900 hover:bg-orange-500 transition-all duration-300 px-6 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">DEEKEN</h3>
              <p className="mb-4">Your trusted online marketplace for quality products at great prices.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-orange-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl hover:text-orange-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl hover:text-orange-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl hover:text-orange-300 transition-colors transform hover:scale-110">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-300">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-300 transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-300">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-600 mt-8 pt-8 text-center">
            <p>&copy; 2024 Deeken. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
