import React, { useState } from 'react';
import Header from '../components/Header';
import { Ambulance as AmbulanceIcon, Phone, Clock, MapPin, AlertTriangle, Heart } from 'lucide-react';

const Ambulance: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [emergencyType, setEmergencyType] = useState('');

  const emergencyTypes = [
    { id: 'cardiac', name: 'Heart Attack', icon: Heart, color: 'bg-red-500' },
    { id: 'accident', name: 'Accident/Injury', icon: AlertTriangle, color: 'bg-orange-500' },
    { id: 'breathing', name: 'Breathing Problem', icon: AmbulanceIcon, color: 'bg-blue-500' },
    { id: 'other', name: 'Other Emergency', icon: Phone, color: 'bg-purple-500' }
  ];

  const handleEmergencyCall = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      alert('Emergency services contacted! Ambulance dispatched to your location.');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-4">
              <AmbulanceIcon className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Emergency Medical Assistance</h1>
            <p className="text-gray-600">Get immediate medical help during your journey</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Emergency Type</h3>
            <div className="grid grid-cols-2 gap-4">
              {emergencyTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setEmergencyType(type.id)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      emergencyType === type.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`p-2 ${type.color} rounded-lg w-8 h-8 mx-auto mb-2`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <p className="font-medium text-gray-900 text-sm">{type.name}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleEmergencyCall}
            disabled={!emergencyType || isConnecting}
            className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {isConnecting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Calling Emergency Services...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>Call Ambulance (108)</span>
              </div>
            )}
          </button>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-blue-800 font-medium">24/7 Service</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <MapPin className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-800 font-medium">GPS Tracking</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">What to do while waiting:</h4>
            <div className="text-blue-700 text-sm space-y-1">
              <p>• Keep the patient calm and comfortable</p>
              <p>• Do not move injured person unless necessary</p>
              <p>• Apply first aid if trained</p>
              <p>• Keep airways clear</p>
              <p>• Stay on the line with emergency services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambulance;