
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { User, Mail, Phone, MapPin, Package, Heart, Settings, LogOut } from "lucide-react";

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: ""
  });

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg",
    joinDate: "January 2024",
    totalOrders: 15,
    totalSpent: 1250.99
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login
      console.log("Logging in:", { email: formData.email, password: formData.password });
      setIsLoggedIn(true);
    } else {
      // Simulate registration
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Registering:", formData);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-06-05",
      status: "Delivered",
      total: 89.99,
      items: 2
    },
    {
      id: "ORD-002",
      date: "2024-06-01",
      status: "Shipped",
      total: 149.99,
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-05-28",
      status: "Processing",
      total: 199.99,
      items: 3
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        {/* Header */}
        <div className="absolute top-0 left-0 w-full bg-blue-900 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-orange-400 hover:scale-105 transition-transform">
              DEEKEN
            </Link>
            <Link to="/" className="hover:text-orange-300 transition-colors">
              <i className="fa fa-home mr-2"></i>Back to Home
            </Link>
          </div>
        </div>

        <Card className="w-full max-w-md transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-blue-200">
          <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">
              {isLogin ? "Welcome Back!" : "Join Deeken"}
            </CardTitle>
            <p className="text-blue-200">
              {isLogin ? "Sign in to your account" : "Create your account today"}
            </p>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-blue-900">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-blue-900">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-900">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blue-900">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-900">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-blue-900">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-blue-200 focus:border-orange-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 text-white font-semibold py-2"
              >
                {isLogin ? (
                  <>
                    <i className="fa fa-sign-in-alt mr-2"></i>
                    Sign In
                  </>
                ) : (
                  <>
                    <i className="fa fa-user-plus mr-2"></i>
                    Create Account
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-blue-600 hover:text-orange-500 font-semibold transition-colors"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-orange-400 hover:scale-105 transition-transform">
            DEEKEN
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-blue-200">Welcome back, {user.firstName}!</span>
            <Link to="/" className="hover:text-orange-300 transition-colors">
              <i className="fa fa-home mr-2"></i>Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4 border-4 border-blue-200">
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback className="bg-blue-600 text-white text-xl">
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-blue-900">{user.firstName} {user.lastName}</h3>
                  <p className="text-gray-600">Member since {user.joinDate}</p>
                </div>

                <nav className="space-y-2">
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors text-blue-900 bg-blue-100">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors text-gray-700">
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors text-gray-700">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors text-gray-700">
                    <MapPin className="h-5 w-5" />
                    <span>Addresses</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-blue-50 rounded-lg transition-colors text-gray-700">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl text-blue-600 mb-2">
                    <i className="fa fa-shopping-bag"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{user.totalOrders}</h3>
                  <p className="text-gray-600">Total Orders</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl text-orange-500 mb-2">
                    <i className="fa fa-dollar-sign"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">${user.totalSpent}</h3>
                  <p className="text-gray-600">Total Spent</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl text-green-500 mb-2">
                    <i className="fa fa-heart"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">8</h3>
                  <p className="text-gray-600">Wishlist Items</p>
                </CardContent>
              </Card>
            </div>

            {/* Profile Information */}
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-blue-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold text-blue-900">{user.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Default Address</p>
                        <p className="font-semibold text-blue-900">123 Main St, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-blue-600 hover:bg-orange-500 transition-all duration-300">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border-2 border-blue-100 rounded-lg hover:border-orange-300 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl text-blue-600">
                          <i className="fa fa-box"></i>
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-900">${order.total}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
