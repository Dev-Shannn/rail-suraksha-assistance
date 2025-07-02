import React, { useState } from 'react';
import Header from '../components/Header';
import { ChefHat, Clock, Star, Plus, Minus, ShoppingCart, MapPin, Phone } from 'lucide-react';

const FoodToSeat: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('meals');
  const [cart, setCart] = useState<any[]>([]);
  const [seatNumber, setSeatNumber] = useState('');
  const [coachNumber, setCoachNumber] = useState('');

  const categories = [
    { id: 'meals', name: 'Meals', icon: ChefHat },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'regional', name: 'Regional', icon: '🍛' }
  ];

  // Enhanced food image component with better food images
  const FoodImage = ({ imageUrl, name, fallbackColor }: { imageUrl: string; name: string; fallbackColor: string }) => (
    <div className="relative w-full h-32 rounded-lg mb-4 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        onError={(e) => {
          // Fallback to colored background if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className={`hidden w-full h-full ${fallbackColor} flex items-center justify-center text-white absolute inset-0`}>
        <div className="text-center">
          <ChefHat className="h-8 w-8 mx-auto mb-2" />
          <div className="text-sm font-medium px-2">{name}</div>
        </div>
      </div>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );

  const foodItems = {
    meals: [
      {
        id: 1,
        name: 'Veg Thali',
        price: 120,
        imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-green-500',
        description: 'Dal, Rice, Roti, Sabzi, Pickle, Papad',
        rating: 4.2,
        time: '25-30 min',
        vendor: 'Railway Catering'
      },
      {
        id: 2,
        name: 'Chicken Biryani',
        price: 180,
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-500',
        description: 'Aromatic basmati rice with tender chicken',
        rating: 4.5,
        time: '30-35 min',
        vendor: 'Biryani Express'
      },
      {
        id: 3,
        name: 'Paneer Butter Masala',
        price: 150,
        imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-red-500',
        description: 'Rich paneer curry with rice/roti',
        rating: 4.3,
        time: '20-25 min',
        vendor: 'North Indian Kitchen'
      },
      {
        id: 4,
        name: 'Fish Curry Rice',
        price: 160,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-blue-500',
        description: 'Bengali style fish curry with steamed rice',
        rating: 4.4,
        time: '25-30 min',
        vendor: 'Bengali Delights'
      },
      {
        id: 5,
        name: 'Mutton Curry',
        price: 220,
        imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-red-700',
        description: 'Spicy mutton curry with rice or roti',
        rating: 4.6,
        time: '35-40 min',
        vendor: 'Mughlai Kitchen'
      },
      {
        id: 51,
        name: 'Dal Makhani',
        price: 140,
        imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-amber-600',
        description: 'Creamy black lentils with butter and cream',
        rating: 4.4,
        time: '20-25 min',
        vendor: 'Punjabi Dhaba'
      }
    ],
    snacks: [
      {
        id: 6,
        name: 'Samosa (2 pcs)',
        price: 30,
        imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-500',
        description: 'Crispy fried pastry with spiced filling',
        rating: 4.0,
        time: '10-15 min',
        vendor: 'Station Snacks'
      },
      {
        id: 7,
        name: 'Veg Sandwich',
        price: 50,
        imageUrl: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-green-500',
        description: 'Grilled vegetable sandwich with chutney',
        rating: 3.8,
        time: '15-20 min',
        vendor: 'Quick Bites'
      },
      {
        id: 8,
        name: 'Pav Bhaji',
        price: 70,
        imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-600',
        description: 'Mumbai style pav bhaji with butter',
        rating: 4.3,
        time: '20-25 min',
        vendor: 'Mumbai Express'
      },
      {
        id: 9,
        name: 'Aloo Tikki Burger',
        price: 60,
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-600',
        description: 'Crispy potato patty burger with sauces',
        rating: 4.1,
        time: '15-20 min',
        vendor: 'Burger Junction'
      },
      {
        id: 10,
        name: 'Chole Bhature',
        price: 80,
        imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-500',
        description: 'Spicy chickpeas with fried bread',
        rating: 4.4,
        time: '20-25 min',
        vendor: 'Punjabi Dhaba'
      },
      {
        id: 52,
        name: 'Dosa',
        price: 65,
        imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-500',
        description: 'Crispy South Indian crepe with sambar',
        rating: 4.2,
        time: '15-20 min',
        vendor: 'South Express'
      }
    ],
    beverages: [
      {
        id: 11,
        name: 'Masala Chai',
        price: 15,
        imageUrl: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-amber-700',
        description: 'Hot spiced tea with milk',
        rating: 4.1,
        time: '5-10 min',
        vendor: 'Chai Point'
      },
      {
        id: 12,
        name: 'Cold Coffee',
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-amber-800',
        description: 'Refreshing iced coffee with cream',
        rating: 4.0,
        time: '5-10 min',
        vendor: 'Coffee Corner'
      },
      {
        id: 13,
        name: 'Fresh Lime Soda',
        price: 25,
        imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-lime-500',
        description: 'Fresh lime with soda and mint',
        rating: 4.2,
        time: '5-10 min',
        vendor: 'Fresh Drinks'
      },
      {
        id: 14,
        name: 'Mango Lassi',
        price: 35,
        imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-500',
        description: 'Creamy mango yogurt drink',
        rating: 4.3,
        time: '5-10 min',
        vendor: 'Dairy Delights'
      },
      {
        id: 15,
        name: 'Mineral Water',
        price: 20,
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-blue-500',
        description: 'Sealed mineral water bottle 1L',
        rating: 4.5,
        time: '2-5 min',
        vendor: 'Aqua Fresh'
      },
      {
        id: 53,
        name: 'Fresh Orange Juice',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-500',
        description: 'Freshly squeezed orange juice',
        rating: 4.3,
        time: '5-10 min',
        vendor: 'Fresh Drinks'
      }
    ],
    desserts: [
      {
        id: 16,
        name: 'Gulab Jamun (2 pcs)',
        price: 25,
        imageUrl: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-amber-600',
        description: 'Sweet milk dumplings in syrup',
        rating: 4.4,
        time: '5-10 min',
        vendor: 'Sweet Treats'
      },
      {
        id: 17,
        name: 'Rasgulla (3 pcs)',
        price: 30,
        imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-gray-400',
        description: 'Spongy cottage cheese balls in syrup',
        rating: 4.2,
        time: '5-10 min',
        vendor: 'Bengali Sweets'
      },
      {
        id: 18,
        name: 'Ice Cream Cup',
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-pink-500',
        description: 'Vanilla/Chocolate ice cream cup',
        rating: 4.0,
        time: '2-5 min',
        vendor: 'Cool Treats'
      },
      {
        id: 54,
        name: 'Kulfi',
        price: 35,
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-400',
        description: 'Traditional Indian ice cream on stick',
        rating: 4.3,
        time: '2-5 min',
        vendor: 'Desi Treats'
      }
    ],
    breakfast: [
      {
        id: 19,
        name: 'Poha',
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-500',
        description: 'Flattened rice with vegetables and spices',
        rating: 4.1,
        time: '15-20 min',
        vendor: 'Morning Bites'
      },
      {
        id: 20,
        name: 'Upma',
        price: 35,
        imageUrl: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-500',
        description: 'Semolina breakfast with vegetables',
        rating: 3.9,
        time: '15-20 min',
        vendor: 'South Indian Corner'
      },
      {
        id: 21,
        name: 'Paratha with Curd',
        price: 60,
        imageUrl: 'https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-600',
        description: 'Stuffed paratha with fresh curd',
        rating: 4.3,
        time: '20-25 min',
        vendor: 'Punjabi Kitchen'
      },
      {
        id: 22,
        name: 'Idli Sambhar (4 pcs)',
        price: 50,
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-gray-300',
        description: 'Steamed rice cakes with sambhar',
        rating: 4.2,
        time: '15-20 min',
        vendor: 'South Express'
      },
      {
        id: 55,
        name: 'Aloo Paratha',
        price: 55,
        imageUrl: 'https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-600',
        description: 'Potato stuffed flatbread with butter',
        rating: 4.4,
        time: '20-25 min',
        vendor: 'Punjabi Kitchen'
      }
    ],
    regional: [
      {
        id: 23,
        name: 'Rajasthani Dal Baati',
        price: 90,
        imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-orange-600',
        description: 'Traditional Rajasthani dal with baati',
        rating: 4.5,
        time: '25-30 min',
        vendor: 'Rajasthani Rasoi'
      },
      {
        id: 24,
        name: 'Gujarati Thali',
        price: 110,
        imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-green-600',
        description: 'Complete Gujarati meal with sweets',
        rating: 4.4,
        time: '25-30 min',
        vendor: 'Gujarat Kitchen'
      },
      {
        id: 25,
        name: 'Hyderabadi Biryani',
        price: 200,
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-red-700',
        description: 'Authentic Hyderabadi dum biryani',
        rating: 4.7,
        time: '35-40 min',
        vendor: 'Nizami Kitchen'
      },
      {
        id: 26,
        name: 'Kerala Fish Curry',
        price: 170,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-green-700',
        description: 'Coconut based fish curry with rice',
        rating: 4.6,
        time: '30-35 min',
        vendor: 'Kerala Spice'
      },
      {
        id: 56,
        name: 'Bengali Fish Curry',
        price: 165,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-yellow-700',
        description: 'Traditional Bengali fish curry with rice',
        rating: 4.5,
        time: '25-30 min',
        vendor: 'Bengali Delights'
      },
      {
        id: 57,
        name: 'Maharashtrian Misal Pav',
        price: 75,
        imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80',
        fallbackColor: 'bg-red-600',
        description: 'Spicy sprouts curry with bread',
        rating: 4.3,
        time: '20-25 min',
        vendor: 'Mumbai Express'
      }
    ]
  };

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrder = () => {
    if (cart.length > 0 && seatNumber && coachNumber) {
      alert(`Order placed successfully! Food will be delivered to Coach ${coachNumber}, Seat ${seatNumber} in 25-30 minutes.`);
      setCart([]);
      setSeatNumber('');
      setCoachNumber('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4">
            <ChefHat className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Food to Seat</h1>
          <p className="text-gray-600">Order delicious food delivered directly to your seat</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Food Menu */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{typeof category.icon === 'string' ? category.icon : <ChefHat className="h-6 w-6 mx-auto" />}</div>
                    <p className="font-medium text-gray-900 text-sm">{category.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Food Items */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 capitalize">{selectedCategory}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {foodItems[selectedCategory as keyof typeof foodItems]?.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <FoodImage imageUrl={item.imageUrl} name={item.name} fallbackColor={item.fallbackColor} />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-emerald-600">₹{item.price}</span>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">By {item.vendor}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium">
                          {cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Delivery Info */}
          <div className="space-y-6">
            {/* Delivery Location */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Location</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coach Number</label>
                  <input
                    type="text"
                    value={coachNumber}
                    onChange={(e) => setCoachNumber(e.target.value)}
                    placeholder="e.g., B4, A1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seat Number</label>
                  <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    placeholder="e.g., 25, 26"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Order</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900">Total:</span>
                      <span className="font-bold text-emerald-600 text-lg">₹{getTotalPrice()}</span>
                    </div>
                    
                    <button
                      onClick={handleOrder}
                      disabled={cart.length === 0 || !seatNumber || !coachNumber}
                      className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span>Place Order</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Delivery Information</h4>
              <div className="text-blue-700 text-sm space-y-1">
                <p>• Delivery time: 25-30 minutes</p>
                <p>• Cash on delivery available</p>
                <p>• Track your order in real-time</p>
                <p>• Contact delivery person directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodToSeat;