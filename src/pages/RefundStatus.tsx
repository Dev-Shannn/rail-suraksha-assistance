import React, { useState } from 'react';
import Header from '../components/Header';
import { CreditCard, Search, Clock, CheckCircle, AlertCircle, FileText, Download } from 'lucide-react';

const RefundStatus: React.FC = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  const [refundData, setRefundData] = useState<any>(null);

  const refunds = [
    {
      id: 'R001',
      pnr: '2847561923',
      trainNumber: '12951',
      trainName: 'Mumbai Rajdhani Express',
      cancellationDate: '10-Dec-2024',
      refundAmount: 2890,
      deductedAmount: 560,
      totalRefund: 2330,
      status: 'processed',
      processingTime: '3-5 business days',
      refundMode: 'Original Payment Method',
      expectedDate: '15-Dec-2024'
    },
    {
      id: 'R002',
      pnr: '1234567890',
      trainNumber: '12621',
      trainName: 'Tamil Nadu Express',
      cancellationDate: '08-Dec-2024',
      refundAmount: 1560,
      deductedAmount: 312,
      totalRefund: 1248,
      status: 'processing',
      processingTime: '5-7 business days',
      refundMode: 'Bank Transfer',
      expectedDate: '18-Dec-2024'
    },
    {
      id: 'R003',
      pnr: '9876543210',
      trainNumber: '12840',
      trainName: 'Howrah Mail',
      cancellationDate: '05-Dec-2024',
      refundAmount: 2180,
      deductedAmount: 436,
      totalRefund: 1744,
      status: 'completed',
      processingTime: 'Completed',
      refundMode: 'UPI',
      expectedDate: 'Completed on 12-Dec-2024'
    }
  ];

  const handleSearch = () => {
    if (pnrNumber) {
      const mockRefund = refunds.find(r => r.pnr === pnrNumber) || refunds[0];
      setRefundData(mockRefund);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'processed': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'processed': return <Clock className="h-5 w-5 text-blue-500" />;
      case 'processing': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'failed': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-cyan-100 rounded-full w-16 h-16 mx-auto mb-4">
            <CreditCard className="h-8 w-8 text-cyan-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Status</h1>
          <p className="text-gray-600">Track your cancellation and refund processing</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={pnrNumber}
                onChange={(e) => setPnrNumber(e.target.value)}
                placeholder="Enter PNR number to check refund status"
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
            >
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Check Status</span>
              </div>
            </button>
          </div>
        </div>

        {/* Refund Details */}
        {refundData && (
          <div className="space-y-6">
            {/* Refund Status Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{refundData.trainName}</h2>
                  <p className="text-gray-600">PNR: {refundData.pnr} | Train: {refundData.trainNumber}</p>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 ${getStatusColor(refundData.status)}`}>
                    {getStatusIcon(refundData.status)}
                    <span className="capitalize">{refundData.status}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Refund ID: {refundData.id}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-blue-800 font-medium">Cancellation Date</p>
                  <p className="text-blue-600 font-semibold">{refundData.cancellationDate}</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <CreditCard className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-green-800 font-medium">Refund Amount</p>
                  <p className="text-green-600 font-semibold">₹{refundData.totalRefund}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-purple-800 font-medium">Processing Time</p>
                  <p className="text-purple-600 font-semibold">{refundData.processingTime}</p>
                </div>
              </div>
            </div>

            {/* Refund Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Refund Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Original Ticket Amount</span>
                  <span className="font-semibold text-gray-900">₹{refundData.refundAmount}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Cancellation Charges</span>
                  <span className="font-semibold text-red-600">-₹{refundData.deductedAmount}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Service Charges</span>
                  <span className="font-semibold text-red-600">-₹0</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                  <span className="font-bold text-gray-900">Total Refund Amount</span>
                  <span className="font-bold text-green-600 text-xl">₹{refundData.totalRefund}</span>
                </div>
              </div>
            </div>

            {/* Refund Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Refund Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refund Mode:</span>
                    <span className="font-medium text-gray-900">{refundData.refundMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Date:</span>
                    <span className="font-medium text-gray-900">{refundData.expectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium capitalize ${refundData.status === 'completed' ? 'text-green-600' : 'text-blue-600'}`}>
                      {refundData.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Refund Receipt</span>
                  </button>
                  <button className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Refund Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ticket Cancelled</p>
                    <p className="text-sm text-gray-600">{refundData.cancellationDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    refundData.status === 'processing' || refundData.status === 'processed' || refundData.status === 'completed'
                      ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Refund Initiated</p>
                    <p className="text-sm text-gray-600">Processing started</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    refundData.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {refundData.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Refund Completed</p>
                    <p className="text-sm text-gray-600">
                      {refundData.status === 'completed' ? refundData.expectedDate : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Refunds */}
        {!refundData && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Refunds</h2>
            <div className="space-y-4">
              {refunds.map((refund) => (
                <div key={refund.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
                     onClick={() => setRefundData(refund)}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{refund.trainName}</h3>
                      <p className="text-sm text-gray-600">PNR: {refund.pnr} | {refund.cancellationDate}</p>
                      <p className="text-lg font-bold text-green-600 mt-1">₹{refund.totalRefund}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(refund.status)}`}>
                      {refund.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!refundData && refunds.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <CreditCard className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Refund Status</h3>
            <p className="text-gray-600">Enter your PNR number to track cancellation and refund processing</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RefundStatus;