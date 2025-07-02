import React, { useState } from 'react';
import Header from '../components/Header';
import { Search, FileText, User, Calendar, MapPin, CreditCard, AlertCircle } from 'lucide-react';

const PNRStatus: React.FC = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  const [pnrData, setPnrData] = useState<any>(null);

  const handleSearch = () => {
    if (pnrNumber) {
      // Simulate PNR data
      const mockData = {
        pnr: pnrNumber,
        trainNo: '12951',
        trainName: 'Mumbai Rajdhani Express',
        from: 'New Delhi',
        to: 'Mumbai Central',
        dateOfJourney: '15-Dec-2024',
        class: '3A',
        quota: 'GN',
        bookingStatus: 'CNF',
        currentStatus: 'Confirmed',
        chartStatus: 'Chart Not Prepared',
        boardingPoint: 'New Delhi',
        reservationUpto: 'Mumbai Central',
        passengers: [
          {
            name: 'RAJESH KUMAR',
            age: 35,
            gender: 'M',
            bookingStatus: 'CNF/B4/25/LB',
            currentStatus: 'CNF/B4/25/LB'
          },
          {
            name: 'PRIYA KUMARI',
            age: 28,
            gender: 'F',
            bookingStatus: 'CNF/B4/26/UB',
            currentStatus: 'CNF/B4/26/UB'
          }
        ],
        fare: 3450,
        bookingDate: '10-Dec-2024',
        mobile: '9876543210'
      };
      setPnrData(mockData);
    }
  };

  const getStatusColor = (status: string) => {
    if (status.includes('CNF')) return 'text-green-600 bg-green-100';
    if (status.includes('WL')) return 'text-yellow-600 bg-yellow-100';
    if (status.includes('RAC')) return 'text-orange-600 bg-orange-100';
    if (status.includes('CAN')) return 'text-red-600 bg-red-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PNR Status Check</h1>
          <p className="text-gray-600">Check your reservation status and get latest updates</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={pnrNumber}
                onChange={(e) => setPnrNumber(e.target.value)}
                placeholder="Enter 10-digit PNR number"
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Check PNR</span>
              </div>
            </button>
          </div>
        </div>

        {/* PNR Results */}
        {pnrData && (
          <div className="space-y-6">
            {/* PNR Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{pnrData.trainName}</h2>
                  <p className="text-gray-600">PNR: {pnrData.pnr} | Train: {pnrData.trainNo}</p>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pnrData.currentStatus).replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                    {pnrData.currentStatus}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{pnrData.chartStatus}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">From</p>
                  <p className="font-semibold text-gray-900 text-sm">{pnrData.from}</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">To</p>
                  <p className="font-semibold text-gray-900 text-sm">{pnrData.to}</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Date</p>
                  <p className="font-semibold text-gray-900 text-sm">{pnrData.dateOfJourney}</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <FileText className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Class</p>
                  <p className="font-semibold text-gray-900 text-sm">{pnrData.class}</p>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Passenger Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Passenger</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Age/Gender</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Booking Status</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pnrData.passengers.map((passenger: any, index: number) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-2">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="font-medium text-gray-900">{passenger.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">
                          {passenger.age}/{passenger.gender}
                        </td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(passenger.bookingStatus)}`}>
                            {passenger.bookingStatus}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(passenger.currentStatus)}`}>
                            {passenger.currentStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Booking Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking Date:</span>
                    <span className="font-medium text-gray-900">{pnrData.bookingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quota:</span>
                    <span className="font-medium text-gray-900">{pnrData.quota}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Boarding Point:</span>
                    <span className="font-medium text-gray-900">{pnrData.boardingPoint}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reservation Upto:</span>
                    <span className="font-medium text-gray-900">{pnrData.reservationUpto}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile:</span>
                    <span className="font-medium text-gray-900">{pnrData.mobile}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fare Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Fare:</span>
                    <span className="font-bold text-xl text-green-600">₹{pnrData.fare}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Process Refund</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Legend */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle className="h-5 w-5 text-blue-500" />
                <p className="text-blue-800 font-medium">Status Information</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-medium">CNF:</span> Confirmed</p>
                  <p><span className="font-medium">RAC:</span> Reservation Against Cancellation</p>
                </div>
                <div>
                  <p><span className="font-medium">WL:</span> Waiting List</p>
                  <p><span className="font-medium">CAN:</span> Cancelled</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {!pnrData && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your PNR Status</h3>
            <p className="text-gray-600">Enter your 10-digit PNR number to get latest booking status and passenger details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PNRStatus;