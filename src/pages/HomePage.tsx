import React, { useState } from 'react';
import Header from '../components/Header';
import TrainBooking from '../components/TrainBooking';
import QuickActions from '../components/QuickActions';
import ParallaxSection from '../components/ParallaxSection';
import AccessibilityMenu from '../components/AccessibilityMenu';
import { Train, Shield, Users, Clock, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleTrainSearch = (fromCity: string, toCity: string, date: string, passengers: number) => {
    // This will be handled by the TrainBooking component itself
  };

  const handleTrainSelect = (train: any) => {
    navigate('/booking', { state: { selectedTrain: train } });
  };

  const stats = [
    { icon: Train, label: 'Daily Trains', value: '12,000+', color: 'text-blue-600' },
    { icon: Shield, label: 'Safety Reports', value: '1,250', color: 'text-red-600' },
    { icon: Users, label: 'Protected Passengers', value: '2.3M', color: 'text-green-600' },
    { icon: Clock, label: 'Avg Response Time', value: '< 2 min', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <AccessibilityMenu />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Safe <span className="text-red-500">Railway</span> Travel
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              AI-powered safety system with instant panic response, live tracking, 
              and comprehensive complaint management for Indian Railways
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Train Booking Section */}
          <div className="mb-12">
            <TrainBooking onSearch={handleTrainSearch} onTrainSelect={handleTrainSelect} />
          </div>

          {/* Quick Actions Section - Now positioned below train booking */}
          <div className="mb-12">
            <QuickActions />
          </div>
        </div>
      </div>

      {/* Safety Features Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Safety Features</h2>
            <p className="text-lg text-gray-600">Protecting passengers with AI-powered technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Panic Button</h3>
              <p className="text-gray-600">One-tap emergency alert with live location sharing to Railway Police and family</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Commands</h3>
              <p className="text-gray-600">Say "Help" or "Bachao" to activate emergency mode even when phone is in pocket</p>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Reviews</h3>
              <p className="text-gray-600">Rate and review coaches, vendors, and facilities to help fellow passengers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Passengers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The panic button saved my life during a theft attempt. Railway police reached within minutes!"</p>
              <div className="font-semibold text-gray-900">- Priya Sharma, Mumbai</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Voice commands work perfectly even when my phone is in my bag. Amazing technology!"</p>
              <div className="font-semibold text-gray-900">- Rajesh Kumar, Delhi</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Hotel booking feature is so convenient. Found great student discounts near the station!"</p>
              <div className="font-semibold text-gray-900">- Anita Singh, Bangalore</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;