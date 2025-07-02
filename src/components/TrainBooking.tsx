import React, { useState } from 'react';
import { Search, Calendar, Users, ArrowRight, MapPin, Clock, IndianRupee, Star } from 'lucide-react';
import { format } from 'date-fns';
import { trainsData, getTrainsByRoute } from '../data/trainsData';

interface TrainBookingProps {
  onSearch: (fromCity: string, toCity: string, date: string, passengers: number) => void;
  onTrainSelect?: (train: any) => void;
}

const TrainBooking: React.FC<TrainBookingProps> = ({ onSearch, onTrainSelect }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isSwapped, setIsSwapped] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const popularRoutes = [
    { from: 'New Delhi', to: 'Mumbai Central', price: '₹1,200', duration: '16h 30m' },
    { from: 'Chennai Central', to: 'Bangalore', price: '₹450', duration: '4h 45m' },
    { from: 'Kolkata', to: 'Howrah', price: '₹280', duration: '2h 15m' },
    { from: 'Pune', to: 'Goa', price: '₹680', duration: '11h 20m' }
  ];

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
    setIsSwapped(!isSwapped);
  };

  const handleSearch = async () => {
    if (fromCity && toCity && travelDate) {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Search for trains based on route
      let results = getTrainsByRoute(fromCity, toCity);
      
      // If no exact matches, show some sample trains
      if (results.length === 0) {
        results = trainsData.slice(0, 5);
      }
      
      setSearchResults(results);
      setShowResults(true);
      setIsLoading(false);
      onSearch(fromCity, toCity, travelDate, passengers);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Book Train Tickets</h2>
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Booking</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* From City */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                placeholder="Enter departure city"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* To City */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                placeholder="Enter destination city"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-3 relative z-10">
          <button
            onClick={handleSwapCities}
            className={`p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200 transform ${isSwapped ? 'rotate-180' : ''}`}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Travel Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={today}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={!fromCity || !toCity || !travelDate || isLoading}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center space-x-2">
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Search Trains</span>
              </>
            )}
          </div>
        </button>

        {/* Popular Routes */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Routes</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                onClick={() => {
                  setFromCity(route.from);
                  setToCity(route.to);
                }}
                className="p-4 border border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all duration-200 text-left group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                      {route.from} → {route.to}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{route.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <IndianRupee className="h-3 w-3" />
                        <span>{route.price.replace('₹', '')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Available Trains</h3>
          <div className="space-y-4">
            {searchResults.map((train, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{train.trainName}</h4>
                    <p className="text-gray-600">#{train.trainNo}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{train.rating}</span>
                    <span className="text-xs text-gray-500">({train.reviews})</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{train.departure}</div>
                      <div className="text-sm text-gray-600">{train.from}</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-sm text-gray-600">{train.duration}</div>
                      <div className="h-px bg-gray-300 my-1"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{train.arrival}</div>
                      <div className="text-sm text-gray-600">{train.to}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {train.classes.map((cls: any, clsIndex: number) => (
                    <button
                      key={clsIndex}
                      onClick={() => onTrainSelect && onTrainSelect({ ...train, selectedClass: cls })}
                      className="p-3 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                    >
                      <div className="font-semibold text-gray-900">{cls.type}</div>
                      <div className="text-sm text-green-600">₹{cls.price}</div>
                      <div className="text-xs text-gray-600">{cls.available} available</div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Runs: {train.days.join(', ')}
                  </div>
                  <button
                    onClick={() => onTrainSelect && onTrainSelect(train)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainBooking;