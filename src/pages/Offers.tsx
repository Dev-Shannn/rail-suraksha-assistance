import React from 'react';
import Header from '../components/Header';
import { Gift, Percent, Clock, Star, CreditCard, Users } from 'lucide-react';

const Offers: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: 'First Time User Discount',
      description: 'Get 20% off on your first train booking',
      discount: '20% OFF',
      code: 'FIRST20',
      validTill: '31 Dec 2024',
      category: 'New User',
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Student Special',
      description: 'Special discount for students with valid ID',
      discount: '15% OFF',
      code: 'STUDENT15',
      validTill: '28 Feb 2025',
      category: 'Student',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Senior Citizen Offer',
      description: 'Additional discount for senior citizens',
      discount: '25% OFF',
      code: 'SENIOR25',
      validTill: 'Ongoing',
      category: 'Senior',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Group Booking Discount',
      description: 'Book for 4+ passengers and save more',
      discount: '30% OFF',
      code: 'GROUP30',
      validTill: '15 Jan 2025',
      category: 'Group',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Weekend Special',
      description: 'Special rates for weekend travel',
      discount: '10% OFF',
      code: 'WEEKEND10',
      validTill: 'Every Weekend',
      category: 'Weekend',
      color: 'bg-pink-500'
    },
    {
      id: 6,
      title: 'Cashback Offer',
      description: 'Get cashback on UPI payments',
      discount: '₹100 Cashback',
      code: 'UPI100',
      validTill: '31 Jan 2025',
      category: 'Payment',
      color: 'bg-teal-500'
    }
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code ${code} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4">
            <Gift className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Special Offers & Deals</h1>
          <p className="text-gray-600">Save more on your train bookings with exclusive discounts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 ${offer.color} text-white rounded-full text-sm font-medium`}>
                  {offer.category}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{offer.discount}</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Coupon Code</p>
                    <p className="font-mono font-bold text-gray-900">{offer.code}</p>
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Valid till {offer.validTill}</span>
                </div>
                <button className="text-blue-500 hover:text-blue-700 font-medium">
                  Use Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Use Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Select Your Journey</h3>
              <p className="text-gray-600 text-sm">Choose your train and proceed to booking</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4">
                <Percent className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Apply Coupon Code</h3>
              <p className="text-gray-600 text-sm">Enter the coupon code at checkout</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Enjoy Savings</h3>
              <p className="text-gray-600 text-sm">Get instant discount on your booking</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Gift className="h-6 w-6 text-red-500" />
            <h3 className="text-lg font-semibold text-red-800">Terms & Conditions</h3>
          </div>
          <div className="text-red-700 text-sm space-y-2">
            <p>• Offers are valid for limited time only</p>
            <p>• Cannot be combined with other offers</p>
            <p>• Applicable on select routes and classes</p>
            <p>• Subject to availability and booking conditions</p>
            <p>• RAILSAFE ASSISTANT reserves the right to modify or cancel offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;