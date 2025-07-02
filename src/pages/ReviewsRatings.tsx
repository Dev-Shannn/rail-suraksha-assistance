import React, { useState } from 'react';
import Header from '../components/Header';
import { Star, ThumbsUp, ThumbsDown, Filter, Search, Train, Utensils, Sofa, Wifi } from 'lucide-react';

const ReviewsRatings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Reviews', icon: Star },
    { id: 'trains', name: 'Trains', icon: Train },
    { id: 'food', name: 'Food & Vendors', icon: Utensils },
    { id: 'coaches', name: 'Coaches', icon: Sofa },
    { id: 'facilities', name: 'Facilities', icon: Wifi }
  ];

  const reviews = [
    {
      id: 1,
      category: 'trains',
      title: 'Mumbai Rajdhani Express - Excellent Service',
      trainNumber: '12951',
      rating: 5,
      author: 'Rajesh Kumar',
      date: '2 days ago',
      content: 'Amazing journey! The train was on time, staff was courteous, and the food quality was excellent. AC was working perfectly throughout the journey.',
      helpful: 24,
      location: 'New Delhi to Mumbai',
      verified: true
    },
    {
      id: 2,
      category: 'food',
      title: 'Platform Food Vendor - Good Quality',
      rating: 4,
      author: 'Priya Singh',
      date: '1 week ago',
      content: 'Ordered samosas and tea from the platform vendor at New Delhi station. Food was fresh and reasonably priced. Quick service too!',
      helpful: 18,
      location: 'New Delhi Station - Platform 16',
      verified: true
    },
    {
      id: 3,
      category: 'coaches',
      title: 'AC 3 Tier Coach - Clean and Comfortable',
      trainNumber: '12621',
      rating: 4,
      author: 'Amit Patel',
      date: '3 days ago',
      content: 'Coach B4 was very clean. Bedding was fresh and washrooms were maintained well. Only issue was the charging point near my seat was not working.',
      helpful: 15,
      location: 'Coach B4, Tamil Nadu Express',
      verified: false
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Station WiFi - Needs Improvement',
      rating: 2,
      author: 'Sneha Sharma',
      date: '5 days ago',
      content: 'WiFi at Chennai Central is very slow and keeps disconnecting. Difficult to work or browse while waiting for the train.',
      helpful: 32,
      location: 'Chennai Central Station',
      verified: true
    },
    {
      id: 5,
      category: 'trains',
      title: 'Shatabdi Express - Punctual and Clean',
      trainNumber: '12002',
      rating: 5,
      author: 'Vikram Joshi',
      date: '1 week ago',
      content: 'Excellent experience on Bhopal Shatabdi. Train departed and arrived exactly on time. Chair car was comfortable and meal service was good.',
      helpful: 28,
      location: 'New Delhi to Bhopal',
      verified: true
    },
    {
      id: 6,
      category: 'food',
      title: 'Railway Catering - Average Food',
      rating: 3,
      author: 'Meera Gupta',
      date: '4 days ago',
      content: 'Ordered veg thali during journey. Taste was okay but could be better. Packaging was good and delivery was on time to the seat.',
      helpful: 12,
      location: 'Train 12840 - Howrah Mail',
      verified: false
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600 bg-green-100';
    if (rating >= 3) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-yellow-100 rounded-full w-16 h-16 mx-auto mb-4">
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reviews & Ratings</h1>
          <p className="text-gray-600">Read and share experiences about trains, food, and facilities</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Reviews</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search reviews..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full p-3 rounded-lg text-left transition-all flex items-center space-x-3 ${
                        selectedCategory === category.id
                          ? 'bg-yellow-50 border border-yellow-200 text-yellow-800'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Write Review */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share Your Experience</h3>
              <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Reviews' : `${categories.find(c => c.id === selectedCategory)?.name} Reviews`}
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Filter className="h-4 w-4" />
                  <span>{filteredReviews.length} reviews</span>
                </div>
              </div>

              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-gray-900">{review.title}</h3>
                          {review.verified && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        {review.trainNumber && (
                          <p className="text-sm text-gray-600 mb-1">Train #{review.trainNumber}</p>
                        )}
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRatingColor(review.rating)}`}>
                          {review.rating}.0
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {getStarRating(review.rating)}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>By {review.author}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{review.helpful}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                          <ThumbsDown className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredReviews.length === 0 && (
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reviews Found</h3>
                  <p className="text-gray-600">Try adjusting your search or category filter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatings;