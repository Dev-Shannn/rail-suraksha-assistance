import React, { useState } from 'react';
import Header from '../components/Header';
import { Search, Clock, MapPin, AlertCircle, CheckCircle, Train } from 'lucide-react';

const TrainStatus: React.FC = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [searchResults, setSearchResults] = useState<any>(null);

  const handleSearch = () => {
    if (trainNumber) {
      // Simulate API call
      const mockData = {
        trainNo: trainNumber,
        trainName: 'Rajdhani Express',
        from: 'New Delhi',
        to: 'Mumbai Central',
        date: 'Today, Dec 15, 2024',
        currentStatus: 'On Time',
        currentLocation: 'Kota Junction',
        delay: 0,
        nextStation: 'Sawai Madhopur',
        expectedArrival: '14:30',
        platform: 'Platform 2',
        stations: [
          { name: 'New Delhi', arrival: '16:55', departure: '16:55', status: 'departed', platform: '16' },
          { name: 'Gwalior', arrival: '21:05', departure: '21:07', status: 'departed', platform: '3' },
          { name: 'Jhansi', arrival: '22:28', departure: '22:30', status: 'departed', platform: '1' },
          { name: 'Bhopal', arrival: '01:20', departure: '01:25', status: 'departed', platform: '2' },
          { name: 'Kota', arrival: '04:15', departure: '04:17', status: 'current', platform: '2' },
          { name: 'Sawai Madhopur', arrival: '05:20', departure: '05:22', status: 'upcoming', platform: '1' },
          { name: 'Mumbai Central', arrival: '08:35', departure: '08:35', status: 'upcoming', platform: '12' }
        ]
      };
      setSearchResults(mockData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Train Running Status</h1>
          <p className="text-gray-600">Get real-time updates on train delays and current location</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={trainNumber}
                onChange={(e) => setTrainNumber(e.target.value)}
                placeholder="Enter train number (e.g., 12951)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Check Status</span>
              </div>
            </button>
          </div>
        </div>

        {/* Results */}
        {searchResults && (
          <div className="space-y-6">
            {/* Train Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{searchResults.trainName}</h2>
                  <p className="text-gray-600">Train #{searchResults.trainNo}</p>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    searchResults.delay === 0 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {searchResults.currentStatus}
                  </div>
                  {searchResults.delay > 0 && (
                    <p className="text-sm text-red-600 mt-1">Delayed by {searchResults.delay} minutes</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Current Location</p>
                  <p className="font-semibold text-gray-900">{searchResults.currentLocation}</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Clock className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Next Station</p>
                  <p className="font-semibold text-gray-900">{searchResults.nextStation}</p>
                  <p className="text-sm text-green-600">ETA: {searchResults.expectedArrival}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Train className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Platform</p>
                  <p className="font-semibold text-gray-900">{searchResults.platform}</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600">{searchResults.from} → {searchResults.to}</p>
                <p className="text-sm text-gray-500">{searchResults.date}</p>
              </div>
            </div>

            {/* Station List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Station Schedule</h3>
              <div className="space-y-4">
                {searchResults.stations.map((station: any, index: number) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0">
                      {station.status === 'departed' && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                      {station.status === 'current' && (
                        <div className="h-6 w-6 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                      {station.status === 'upcoming' && (
                        <Clock className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{station.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>Arr: {station.arrival}</span>
                        <span>Dep: {station.departure}</span>
                        <span>Platform: {station.platform}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        station.status === 'departed' 
                          ? 'bg-green-100 text-green-700'
                          : station.status === 'current'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {station.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                <p className="text-yellow-800 font-medium">Live Updates</p>
              </div>
              <p className="text-yellow-700 text-sm mt-1">
                Status updates every 5 minutes. For emergency assistance, use the panic button or call 139.
              </p>
            </div>
          </div>
        )}

        {/* No Results */}
        {!searchResults && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Train className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Train</h3>
            <p className="text-gray-600">Enter a train number above to get real-time running status and location updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainStatus;