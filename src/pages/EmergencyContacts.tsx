import React from 'react';
import Header from '../components/Header';
import { Phone, Shield, Ambulance, MapPin, Clock, AlertTriangle } from 'lucide-react';

const EmergencyContacts: React.FC = () => {
  const emergencyNumbers = [
    {
      category: 'Railway Emergency',
      contacts: [
        { name: 'Railway Helpline', number: '139', description: '24/7 Railway emergency assistance', icon: Phone, color: 'bg-red-500' },
        { name: 'Railway Police (RPF)', number: '182', description: 'Railway Protection Force', icon: Shield, color: 'bg-blue-500' },
        { name: 'Railway Security', number: '1512', description: 'Railway security helpline', icon: Shield, color: 'bg-purple-500' }
      ]
    },
    {
      category: 'Medical Emergency',
      contacts: [
        { name: 'Ambulance', number: '108', description: 'Emergency medical services', icon: Ambulance, color: 'bg-green-500' },
        { name: 'Medical Emergency', number: '102', description: 'Medical emergency helpline', icon: Ambulance, color: 'bg-teal-500' }
      ]
    },
    {
      category: 'General Emergency',
      contacts: [
        { name: 'Emergency Services', number: '112', description: 'Unified emergency number', icon: AlertTriangle, color: 'bg-orange-500' },
        { name: 'Police', number: '100', description: 'Police emergency', icon: Shield, color: 'bg-indigo-500' },
        { name: 'Fire Brigade', number: '101', description: 'Fire emergency services', icon: AlertTriangle, color: 'bg-red-600' }
      ]
    },
    {
      category: 'Women Safety',
      contacts: [
        { name: 'Women Helpline', number: '1091', description: 'Women in distress helpline', icon: Shield, color: 'bg-pink-500' },
        { name: 'Women Safety', number: '181', description: 'Women safety helpline', icon: Shield, color: 'bg-rose-500' }
      ]
    }
  ];

  const stationContacts = [
    { station: 'New Delhi', number: '011-23340000', zone: 'Northern Railway' },
    { station: 'Mumbai Central', number: '022-22070000', zone: 'Western Railway' },
    { station: 'Chennai Central', number: '044-25330000', zone: 'Southern Railway' },
    { station: 'Howrah', number: '033-26602000', zone: 'Eastern Railway' },
    { station: 'Bangalore City', number: '080-22870000', zone: 'South Western Railway' }
  ];

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-4">
            <Phone className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Contacts</h1>
          <p className="text-gray-600">Important helpline numbers for railway and emergency services</p>
        </div>

        {/* Emergency Numbers */}
        <div className="space-y-8">
          {emergencyNumbers.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.contacts.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleCall(contact.number)}
                      className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all text-left group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 ${contact.color} rounded-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{contact.name}</h3>
                          <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                          <p className="text-sm text-gray-600">{contact.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Station Contacts */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Major Station Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stationContacts.map((station, index) => (
              <button
                key={index}
                onClick={() => handleCall(station.number)}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <h3 className="font-bold text-gray-900">{station.station}</h3>
                </div>
                <p className="text-lg font-semibold text-blue-600 mb-1">{station.number}</p>
                <p className="text-sm text-gray-600">{station.zone}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-blue-500" />
              <h3 className="font-bold text-blue-800">24/7 Services</h3>
            </div>
            <div className="text-blue-700 text-sm space-y-2">
              <p>• Railway Helpline (139) - Available 24/7</p>
              <p>• Emergency Services (112) - Always available</p>
              <p>• Ambulance (108) - Round the clock</p>
              <p>• Women Helpline (1091) - 24/7 support</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h3 className="font-bold text-red-800">Emergency Guidelines</h3>
            </div>
            <div className="text-red-700 text-sm space-y-2">
              <p>• Stay calm and speak clearly</p>
              <p>• Provide exact location details</p>
              <p>• Describe the nature of emergency</p>
              <p>• Follow instructions from authorities</p>
              <p>• Keep your phone charged during travel</p>
            </div>
          </div>
        </div>

        {/* Quick Dial */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-bold text-red-800 mb-4 text-center">Quick Emergency Dial</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => handleCall('139')}
              className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-center"
            >
              <Phone className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold">139</div>
              <div className="text-xs">Railway</div>
            </button>
            <button
              onClick={() => handleCall('108')}
              className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-center"
            >
              <Ambulance className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold">108</div>
              <div className="text-xs">Ambulance</div>
            </button>
            <button
              onClick={() => handleCall('100')}
              className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              <Shield className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold">100</div>
              <div className="text-xs">Police</div>
            </button>
            <button
              onClick={() => handleCall('1091')}
              className="p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-center"
            >
              <Shield className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold">1091</div>
              <div className="text-xs">Women</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;