import React, { useState } from 'react';
import Header from '../components/Header';
import { Phone, Shield, Clock, MapPin, AlertTriangle } from 'lucide-react';

const PoliceCall: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleEmergencyCall = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-6">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Emergency Police Call</h1>
          <p className="text-gray-600 mb-8">Direct connection to Railway Police Force</p>

          {!isConnected && !isConnecting && (
            <button
              onClick={handleEmergencyCall}
              className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg mb-6"
            >
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>Call Railway Police (139)</span>
              </div>
            </button>
          )}

          {isConnecting && (
            <div className="mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
              <p className="text-red-600 font-medium">Connecting to Railway Police...</p>
            </div>
          )}

          {isConnected && (
            <div className="mb-6">
              <div className="p-4 bg-green-100 rounded-lg mb-4">
                <p className="text-green-800 font-medium">Connected to Railway Police</p>
                <p className="text-green-600 text-sm">Your location has been shared automatically</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-blue-800 font-medium">24/7 Available</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <MapPin className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-800 font-medium">Location Shared</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <p className="text-yellow-800 font-medium">Emergency Guidelines</p>
            </div>
            <div className="text-yellow-700 text-sm text-left space-y-1">
              <p>• Stay calm and speak clearly</p>
              <p>• Provide your exact location</p>
              <p>• Describe the emergency situation</p>
              <p>• Follow officer instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceCall;