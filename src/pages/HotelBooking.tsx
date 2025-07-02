import React, { useState } from 'react';
import Header from '../components/Header';
import PaymentGateway from '../components/PaymentGateway';
import { 
  Building, 
  MapPin, 
  Star, 
  Wifi, 
  Car, 
  Coffee, 
  Users, 
  Calendar,
  Search,
  Filter,
  Clock,
  GraduationCap,
  Plane,
  Moon,
  CheckCircle,
  ArrowLeft,
  Phone,
  Crown,
  Eye,
  EyeOff
} from 'lucide-react';
import { hotelsData, getHotelsByCategory } from '../data/hotelsData';

const HotelBooking: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchLocation, setSearchLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Hotels', icon: Building, color: 'bg-blue-500' },
    { id: 'student', name: 'Student Friendly', icon: GraduationCap, color: 'bg-green-500' },
    { id: 'travel', name: 'Business Travel', icon: Plane, color: 'bg-purple-500' },
    { id: 'hourly', name: 'Few Hours Stay', icon: Clock, color: 'bg-orange-500' },
    { id: 'luxury', name: 'Luxury Hotels', icon: Crown, color: 'bg-yellow-500' }
  ];

  const filteredHotels = getHotelsByCategory(selectedCategory);

  const today = new Date().toISOString().split('T')[0];

  const handleBookHotel = (hotel: any) => {
    setSelectedHotel(hotel);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setBookingComplete(true);
  };

  const toggleDetails = (hotelId: number) => {
    setShowDetails(showDetails === hotelId ? null : hotelId);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Hotel Booked Successfully!</h1>
            <p className="text-gray-600 mb-6">Your hotel reservation has been confirmed</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-bold text-blue-600">HTL{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hotel:</span>
                  <span className="font-medium">{selectedHotel?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">{checkIn || 'Today'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{guests}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                setBookingComplete(false);
                setSelectedHotel(null);
                setShowPayment(false);
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Book Another Hotel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment && selectedHotel) {
    return (
      <PaymentGateway
        amount={selectedHotel.price}
        onPaymentSuccess={handlePaymentSuccess}
        onBack={() => setShowPayment(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hotel Booking</h1>
          <p className="text-gray-600">Find comfortable stays near railway stations</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Near which station?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold">
            <div className="flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Hotels</span>
            </div>
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hotel Categories</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedCategory === category.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className={`p-3 ${category.color} rounded-lg w-12 h-12 mx-auto mb-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel, index) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={hotel.imageUrl} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback to a solid color background if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">{hotel.name}</p>
                  </div>
                </div>
                
                {hotel.studentDiscount && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Student Discount
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium">
                  {hotel.distance}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{hotel.rating}</span>
                    <span className="text-xs text-gray-500">({hotel.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{hotel.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{hotel.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">₹{hotel.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{hotel.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-orange-600">₹{hotel.hourlyRate}/hour</div>
                    <p className="text-xs text-gray-500">hourly rate</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button 
                    onClick={() => handleBookHotel(hotel)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={() => toggleDetails(hotel.id)}
                    className="border border-red-500 text-red-500 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
                  >
                    {showDetails === hotel.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span>{showDetails === hotel.id ? 'Hide' : 'Details'}</span>
                  </button>
                </div>

                {/* Expanded Details */}
                {showDetails === hotel.id && (
                  <div className="border-t border-gray-200 pt-4 space-y-3 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Address:</strong> {hotel.address}</p>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{hotel.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Check-in/out Times</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <p><strong>Check-in:</strong> {hotel.checkInTime}</p>
                        <p><strong>Check-out:</strong> {hotel.checkOutTime}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">All Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h4>
                      <p className="text-sm text-gray-600">{hotel.cancellationPolicy}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Special Hotel Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <GraduationCap className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student Special</h3>
              <p className="text-gray-600 text-sm mb-3">Extra 20% off for students with valid ID</p>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Code: STUDENT20
              </span>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Stay</h3>
              <p className="text-gray-600 text-sm mb-3">Hourly bookings starting from ₹50</p>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Code: HOURLY50
              </span>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <Plane className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business Travel</h3>
              <p className="text-gray-600 text-sm mb-3">Corporate rates with flexible cancellation</p>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Code: BUSINESS15
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;