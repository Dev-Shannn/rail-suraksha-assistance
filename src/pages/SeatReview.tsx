import React, { useState } from 'react';
import Header from '../components/Header';
import { Sofa, Star, Camera, ThumbsUp, ThumbsDown, Droplets, Wind, Upload, CheckCircle } from 'lucide-react';

const SeatReview: React.FC = () => {
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    comfort: 0,
    space: 0,
    overall: 0
  });
  const [coachNumber, setCoachNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [review, setReview] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const ratingCategories = [
    { key: 'cleanliness', label: 'Cleanliness', icon: Droplets },
    { key: 'comfort', label: 'Comfort', icon: Sofa },
    { key: 'space', label: 'Space', icon: Wind },
    { key: 'overall', label: 'Overall', icon: ThumbsUp }
  ];

  const handleRatingChange = (category: string, rating: number) => {
    setRatings(prev => ({ ...prev, [category]: rating }));
  };

  const handlePhotoUpload = (type: string) => {
    // Simulate photo upload
    const newPhoto = `${type}_photo_${Date.now()}.jpg`;
    setUploadedPhotos(prev => [...prev, newPhoto]);
  };

  const handleSubmit = () => {
    if (coachNumber && seatNumber && ratings.overall > 0) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        // Reset form
        setRatings({ cleanliness: 0, comfort: 0, space: 0, overall: 0 });
        setCoachNumber('');
        setSeatNumber('');
        setReview('');
        setUploadedPhotos([]);
      }, 3000);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Review Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">Thank you for your feedback. Your review helps other passengers make better choices.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Coach:</span>
                  <span className="font-bold text-blue-600">{coachNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seat:</span>
                  <span className="font-medium">{seatNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Overall Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < ratings.overall ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Submit Another Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="p-4 bg-teal-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Sofa className="h-8 w-8 text-teal-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Seat & Interior Review</h1>
            <p className="text-gray-600">Rate your coach cleanliness and comfort experience</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coach Number</label>
                <input
                  type="text"
                  value={coachNumber}
                  onChange={(e) => setCoachNumber(e.target.value)}
                  placeholder="e.g., B4, A1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seat Number</label>
                <input
                  type="text"
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(e.target.value)}
                  placeholder="e.g., 25, 26"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {ratingCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.key}>
                  <div className="flex items-center space-x-2 mb-3">
                    <IconComponent className="h-5 w-5 text-teal-500" />
                    <label className="text-sm font-medium text-gray-700">{category.label}</label>
                  </div>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingChange(category.key, star)}
                        className={`p-1 ${star <= ratings[category.key as keyof typeof ratings] ? 'text-yellow-500' : 'text-gray-300'}`}
                      >
                        <Star className="h-6 w-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
                placeholder="Share your experience about seat comfort, cleanliness, space, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Add Photos</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handlePhotoUpload('seat')}
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <Camera className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">Seat Photo</span>
                </button>
                <button 
                  onClick={() => handlePhotoUpload('interior')}
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-600">Interior Photo</span>
                </button>
              </div>
              
              {uploadedPhotos.length > 0 && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">Photos uploaded successfully!</p>
                  <div className="text-xs text-green-600 mt-1">
                    {uploadedPhotos.map((photo, index) => (
                      <div key={index}>✓ {photo}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!coachNumber || !seatNumber || ratings.overall === 0}
              className="w-full bg-teal-500 text-white py-4 rounded-lg hover:bg-teal-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Review
            </button>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Your reviews help:</h4>
            <div className="text-blue-700 text-sm space-y-1">
              <p>• Other passengers choose better seats</p>
              <p>• Railway authorities improve services</p>
              <p>• Maintain cleanliness standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatReview;