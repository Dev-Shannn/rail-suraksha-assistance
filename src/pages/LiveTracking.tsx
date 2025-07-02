import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { MapPin, Train, Clock, Navigation, Wifi, Users, Star } from 'lucide-react';

const LiveTracking: React.FC = () => {
  const [selectedTrain, setSelectedTrain] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    station: 'Approaching Kota Junction',
    platform: 'Platform 2',
    speed: '85 km/h',
    nextStation: 'Sawai Madhopur',
    eta: '14:30',
    delay: 0,
    coordinates: { lat: 25.2138, lng: 75.8648 }
  });

  const trains = [
    { number: '12951', name: 'Mumbai Rajdhani Express', route: 'New Delhi - Mumbai Central' },
    { number: '12621', name: 'Tamil Nadu Express', route: 'New Delhi - Chennai Central' },
    { number: '12840', name: 'Howrah Mail', route: 'Chennai Central - Howrah' },
    { number: '12002', name: 'Bhopal Shatabdi', route: 'New Delhi - Bhopal' }
  ];

  const nearbyPassengers = [
    { name: 'Rajesh K.', coach: 'B4', seat: '25', rating: 4.2 },
    { name: 'Priya S.', coach: 'B4', seat: '26', rating: 4.5 },
    { name: 'Amit P.', coach: 'B3', seat: '12', rating: 4.0 }
  ];

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setCurrentLocation(prev => ({
          ...prev,
          speed: `${Math.floor(Math.random() * 40) + 60} km/h`,
          delay: Math.floor(Math.random() * 10)
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const handleStartTracking = () => {
    if (selectedTrain) {
      setIsTracking(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4">
            <MapPin className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Train Tracking</h1>
          <p className="text-gray-600">Real-time train location and platform information</p>
        </div>

        {!isTracking ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Select Train to Track</h2>
            <div className="space-y-4 mb-6">
              {trains.map((train) => (
                <button
                  key={train.number}
                  onClick={() => setSelectedTrain(train.number)}
                  className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                    selectedTrain === train.number
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{train.name}</h3>
                      <p className="text-gray-600 text-sm">#{train.number}</p>
                      <p className="text-gray-500 text-sm">{train.route}</p>
                    </div>
                    <Train className="h-6 w-6 text-purple-500" />
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleStartTracking}
              disabled={!selectedTrain}
              className="w-full bg-purple-500 text-white py-4 rounded-lg hover:bg-purple-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center space-x-2">
                <Navigation className="h-5 w-5" />
                <span>Start Live Tracking</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Tracking Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Status */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Live Status</h2>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Tracking</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <MapPin className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-blue-800 font-medium">Current Location</p>
                    <p className="text-blue-600 text-sm">{currentLocation.station}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <Train className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-green-800 font-medium">Speed</p>
                    <p className="text-green-600 text-sm">{currentLocation.speed}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg text-center">
                    <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-orange-800 font-medium">Next Station</p>
                    <p className="text-orange-600 text-sm">{currentLocation.nextStation}</p>
                    <p className="text-orange-500 text-xs">ETA: {currentLocation.eta}</p>
                  </div>
                </div>

                {currentLocation.delay > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-yellow-800 font-medium">Train is running {currentLocation.delay} minutes late</p>
                  </div>
                )}

                {/* Live Map Placeholder */}
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Live Map View</p>
                    <p className="text-sm text-gray-500">Real-time train position</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Lat: {currentLocation.coordinates.lat}, Lng: {currentLocation.coordinates.lng}
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Platform Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Current Platform</h4>
                    <p className="text-2xl font-bold text-purple-600">{currentLocation.platform}</p>
                    <p className="text-sm text-gray-600">Kota Junction</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Next Platform</h4>
                    <p className="text-2xl font-bold text-green-600">Platform 1</p>
                    <p className="text-sm text-gray-600">Sawai Madhopur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Train Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Train Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Train Number:</span>
                    <span className="font-medium text-gray-900">{selectedTrain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Train Name:</span>
                    <span className="font-medium text-gray-900">
                      {trains.find(t => t.number === selectedTrain)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-medium text-gray-900 text-sm">
                      {trains.find(t => t.number === selectedTrain)?.route}
                    </span>
                  </div>
                </div>
              </div>

              {/* Nearby Passengers */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Passengers</h3>
                <div className="space-y-3">
                  {nearbyPassengers.map((passenger, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{passenger.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">{passenger.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Coach {passenger.coach}, Seat {passenger.seat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Share Location
                  </button>
                  <button className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                    Find Nearby Services
                  </button>
                  <button
                    onClick={() => setIsTracking(false)}
                    className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                  >
                    Stop Tracking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveTracking;