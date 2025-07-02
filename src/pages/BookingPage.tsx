import React, { useState } from 'react';
import Header from '../components/Header';
import PaymentGateway from '../components/PaymentGateway';
import { ArrowLeft, Calendar, Users, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const [selectedTrain, setSelectedTrain] = useState<any>({
    trainNo: '12951',
    trainName: 'Mumbai Rajdhani Express',
    departure: '16:55',
    arrival: '08:35+1',
    duration: '15h 40m',
    date: '15-Dec-2024',
    from: 'New Delhi',
    to: 'Mumbai Central'
  });

  const [selectedClass, setSelectedClass] = useState('3A');
  const [passengers, setPassengers] = useState([
    { name: '', age: '', gender: 'M' }
  ]);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const classes = [
    { type: '1A', name: 'AC 1 Tier', price: 4565, available: 12, description: 'Premium AC with privacy' },
    { type: '2A', name: 'AC 2 Tier', price: 2450, available: 28, description: 'Comfortable AC berths' },
    { type: '3A', name: 'AC 3 Tier', price: 1740, available: 45, description: 'Standard AC accommodation' },
    { type: 'SL', name: 'Sleeper', price: 585, available: 156, description: 'Non-AC sleeper berths' }
  ];

  const addPassenger = () => {
    if (passengers.length < 6) {
      setPassengers([...passengers, { name: '', age: '', gender: 'M' }]);
    }
  };

  const updatePassenger = (index: number, field: string, value: string) => {
    const updated = passengers.map((passenger, i) => 
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengers(updated);
  };

  const removePassenger = (index: number) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter((_, i) => i !== index));
    }
  };

  const selectedClassInfo = classes.find(c => c.type === selectedClass);
  const totalFare = selectedClassInfo ? selectedClassInfo.price * passengers.length : 0;

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setBookingComplete(true);
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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-6">Your train ticket has been booked successfully</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">PNR Number:</span>
                  <span className="font-bold text-blue-600">2847561923</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Train:</span>
                  <span className="font-medium">{selectedTrain.trainName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-green-600">₹{totalFare}</span>
                </div>
              </div>
            </div>
            <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Book Another Ticket
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <PaymentGateway
        amount={totalFare}
        onPaymentSuccess={handlePaymentSuccess}
        onBack={() => setShowPayment(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Search</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Train Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Selected Train</h2>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedTrain.trainName}</h3>
                  <p className="text-gray-600">#{selectedTrain.trainNo}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{selectedTrain.date}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedTrain.departure}</div>
                    <div className="text-sm text-gray-600">{selectedTrain.from}</div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm text-gray-600">{selectedTrain.duration}</div>
                    <div className="h-px bg-gray-300 my-1"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedTrain.arrival}</div>
                    <div className="text-sm text-gray-600">{selectedTrain.to}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in-up">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Select Class</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {classes.map((cls, index) => (
                  <button
                    key={cls.type}
                    onClick={() => setSelectedClass(cls.type)}
                    className={`p-4 border-2 rounded-xl transition-all text-left animate-fade-in ${
                      selectedClass === cls.type
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                        <p className="text-sm text-gray-600">{cls.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₹{cls.price}</div>
                        <div className="text-xs text-gray-500">{cls.available} available</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Passenger Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Passenger Details</h2>
                <button
                  onClick={addPassenger}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  Add Passenger
                </button>
              </div>

              <div className="space-y-4">
                {passengers.map((passenger, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Passenger {index + 1}</h3>
                      {passengers.length > 1 && (
                        <button
                          onClick={() => removePassenger(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          value={passenger.name}
                          onChange={(e) => updatePassenger(index, 'name', e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input
                          type="number"
                          value={passenger.age}
                          onChange={(e) => updatePassenger(index, 'age', e.target.value)}
                          placeholder="Age"
                          min="1"
                          max="120"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                          value={passenger.gender}
                          onChange={(e) => updatePassenger(index, 'gender', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="T">Transgender</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 animate-fade-in">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Train:</span>
                  <span className="font-medium text-gray-900">{selectedTrain.trainNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Class:</span>
                  <span className="font-medium text-gray-900">{selectedClassInfo?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Passengers:</span>
                  <span className="font-medium text-gray-900">{passengers.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Fare:</span>
                  <span className="font-medium text-gray-900">₹{selectedClassInfo?.price || 0}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                  <span className="text-2xl font-bold text-green-600">₹{totalFare}</span>
                </div>
              </div>

              <button 
                onClick={() => setShowPayment(true)}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold text-lg shadow-lg transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Payment</span>
                </div>
              </button>

              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-700 font-medium">Secure Payment</span>
                </div>
                <p className="text-xs text-green-600 mt-1">Your payment is protected by 256-bit SSL encryption</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-blue-800 mb-2">Cancellation & Refund</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• Cancellation charges as per railway rules</p>
                <p>• Instant refund processing available</p>
                <p>• TDR facility for failed bookings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;