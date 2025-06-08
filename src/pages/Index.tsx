
import { Search, ShoppingCart, User, Heart, Menu, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    { name: "Electronics", icon: "📱", count: "2,450+ items" },
    { name: "Fashion", icon: "👗", count: "5,230+ items" },
    { name: "Home & Garden", icon: "🏠", count: "1,890+ items" },
    { name: "Sports", icon: "⚽", count: "1,120+ items" },
    { name: "Books", icon: "📚", count: "3,670+ items" },
    { name: "Beauty", icon: "💄", count: "2,340+ items" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FDFFF6" }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: "#031A09" }}>
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm" style={{ color: "#FDFFF6" }}>
            <div className="flex items-center space-x-4">
              <span>📞 +1 (555) 123-4567</span>
              <span>📧 support@deeken.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over $50</span>
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
              <h1 className="text-3xl font-bold" style={{ color: "#E2F87B" }}>
                DEEKEN
              </h1>
              <nav className="hidden md:flex space-x-6" style={{ color: "#FDFFF6" }}>
                <a href="#" className="hover:text-lime-300 transition-colors">Home</a>
                <a href="#" className="hover:text-lime-300 transition-colors">Categories</a>
                <a href="#" className="hover:text-lime-300 transition-colors">Deals</a>
                <a href="#" className="hover:text-lime-300 transition-colors">About</a>
                <a href="#" className="hover:text-lime-300 transition-colors">Contact</a>
              </nav>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-lime-300"
                  style={{ backgroundColor: "#FDFFF6" }}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5" style={{ color: "#316C40" }} />
              </div>
            </div>
            
            {/* User actions */}
            <div className="flex items-center space-x-4" style={{ color: "#FDFFF6" }}>
              <button className="flex items-center space-x-1 hover:text-lime-300 transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-lime-300 transition-colors">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Wishlist</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-lime-300 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-xs flex items-center justify-center" style={{ backgroundColor: "#E2F87B", color: "#031A09" }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#316C40" }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#E2F87B" }}>
                Summer Sale
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#FDFFF6" }}>
                Up to 70% Off
              </h3>
              <p className="text-lg mb-8" style={{ color: "#FDFFF6" }}>
                Discover amazing deals on thousands of products. Limited time offer!
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 hover:scale-105 transition-transform"
                style={{ backgroundColor: "#E2F87B", color: "#031A09" }}
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Hero Product"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: "#E2F87B", color: "#031A09" }}>
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#031A09" }}>
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-1" style={{ color: "#031A09" }}>{category.name}</h3>
                  <p className="text-sm" style={{ color: "#294E28" }}>{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16" style={{ backgroundColor: "#294E28" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#E2F87B" }}>
              Featured Products
            </h2>
            <Button variant="outline" style={{ borderColor: "#E2F87B", color: "#E2F87B" }}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#E2F87B", color: "#031A09" }}>
                      {product.badge}
                    </div>
                    <button className="absolute top-2 right-2 p-2 rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: "#FDFFF6" }}>
                      <Heart className="h-4 w-4" style={{ color: "#031A09" }} />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2" style={{ color: "#031A09" }}>
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                            style={{ color: "#E2F87B" }}
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2" style={{ color: "#294E28" }}>
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold" style={{ color: "#031A09" }}>
                          ${product.price}
                        </span>
                        <span className="text-sm line-through ml-2" style={{ color: "#294E28" }}>
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" style={{ backgroundColor: "#316C40", color: "#FDFFF6" }}>
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

      {/* Newsletter */}
      <section className="py-16" style={{ backgroundColor: "#031A09" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#E2F87B" }}>
            Stay Updated
          </h2>
          <p className="text-lg mb-8" style={{ color: "#FDFFF6" }}>
            Subscribe to our newsletter for exclusive deals and latest products
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-lime-300"
              style={{ backgroundColor: "#FDFFF6" }}
            />
            <Button style={{ backgroundColor: "#E2F87B", color: "#031A09" }}>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#294E28", color: "#FDFFF6" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#E2F87B" }}>DEEKEN</h3>
              <p className="mb-4">Your trusted online marketplace for quality products at great prices.</p>
              <div className="flex space-x-4">
                <span className="cursor-pointer hover:text-lime-300">📘</span>
                <span className="cursor-pointer hover:text-lime-300">📷</span>
                <span className="cursor-pointer hover:text-lime-300">🐦</span>
                <span className="cursor-pointer hover:text-lime-300">💼</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#E2F87B" }}>Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-lime-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#E2F87B" }}>Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-lime-300 transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#E2F87B" }}>Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-lime-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-600 mt-8 pt-8 text-center">
            <p>&copy; 2024 Deeken. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
