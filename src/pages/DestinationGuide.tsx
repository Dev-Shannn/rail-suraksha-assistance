import React, { useState } from 'react';
import Header from '../components/Header';
import { Compass, MapPin, Utensils, Camera, Clock, Star, Heart, Mountain, Building } from 'lucide-react';

const DestinationGuide: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    {
      id: 'mumbai',
      name: 'Mumbai',
      state: 'Maharashtra',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The financial capital of India, known for Bollywood and street food',
      famousFood: [
        { name: 'Vada Pav', description: 'Mumbai\'s signature burger', price: '₹15-25' },
        { name: 'Pav Bhaji', description: 'Spicy vegetable curry with bread', price: '₹60-100' },
        { name: 'Bhel Puri', description: 'Crispy snack with chutneys', price: '₹30-50' },
        { name: 'Misal Pav', description: 'Spicy sprouts curry', price: '₹40-80' }
      ],
      attractions: [
        { name: 'Gateway of India', type: 'Historical Monument' },
        { name: 'Marine Drive', type: 'Scenic Promenade' },
        { name: 'Elephanta Caves', type: 'UNESCO World Heritage' },
        { name: 'Chhatrapati Shivaji Terminus', type: 'Railway Heritage' }
      ],
      culture: 'Bollywood capital with vibrant nightlife, diverse communities, and rich colonial architecture',
      history: 'Originally seven islands, Mumbai became a major port under British rule and evolved into India\'s commercial hub'
    },
    {
      id: 'delhi',
      name: 'New Delhi',
      state: 'Delhi',
      image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'India\'s capital city with rich Mughal heritage and modern governance',
      famousFood: [
        { name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: '₹80-120' },
        { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: '₹200-300' },
        { name: 'Paranthe Wali Gali', description: 'Variety of stuffed flatbreads', price: '₹50-100' },
        { name: 'Kulfi', description: 'Traditional Indian ice cream', price: '₹30-60' }
      ],
      attractions: [
        { name: 'Red Fort', type: 'Mughal Architecture' },
        { name: 'India Gate', type: 'War Memorial' },
        { name: 'Qutub Minar', type: 'UNESCO World Heritage' },
        { name: 'Lotus Temple', type: 'Modern Architecture' }
      ],
      culture: 'Blend of ancient traditions and modern politics, with diverse communities and rich artistic heritage',
      history: 'Capital of multiple empires including Mughals and British, witness to India\'s independence struggle'
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      state: 'West Bengal',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cultural capital of India, known for literature, art, and sweets',
      famousFood: [
        { name: 'Rosogolla', description: 'Spongy cottage cheese balls in syrup', price: '₹20-40' },
        { name: 'Fish Curry', description: 'Bengali fish in mustard gravy', price: '₹150-250' },
        { name: 'Kathi Roll', description: 'Wrapped kebabs in paratha', price: '₹60-120' },
        { name: 'Mishti Doi', description: 'Sweet yogurt dessert', price: '₹30-50' }
      ],
      attractions: [
        { name: 'Victoria Memorial', type: 'Colonial Architecture' },
        { name: 'Howrah Bridge', type: 'Engineering Marvel' },
        { name: 'Dakshineswar Temple', type: 'Religious Site' },
        { name: 'Park Street', type: 'Cultural Hub' }
      ],
      culture: 'Intellectual and artistic hub with strong literary traditions, festivals, and performing arts',
      history: 'Former capital of British India, birthplace of Indian Renaissance and freedom movement'
    },
    {
      id: 'chennai',
      name: 'Chennai',
      state: 'Tamil Nadu',
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Gateway to South India, known for temples, beaches, and classical music',
      famousFood: [
        { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil curry', price: '₹40-80' },
        { name: 'Dosa', description: 'Crispy rice crepe with coconut chutney', price: '₹50-100' },
        { name: 'Filter Coffee', description: 'Strong South Indian coffee', price: '₹20-40' },
        { name: 'Chettinad Chicken', description: 'Spicy Tamil Nadu chicken curry', price: '₹180-280' }
      ],
      attractions: [
        { name: 'Marina Beach', type: 'Longest Beach in India' },
        { name: 'Kapaleeshwarar Temple', type: 'Dravidian Architecture' },
        { name: 'Fort St. George', type: 'Colonial Heritage' },
        { name: 'Mahabalipuram', type: 'UNESCO World Heritage' }
      ],
      culture: 'Classical music and dance traditions, temple architecture, and strong Tamil cultural identity',
      history: 'Ancient port city with Pallava and Chola heritage, major center of South Indian culture'
    },
    {
      id: 'bangalore',
      name: 'Bangalore',
      state: 'Karnataka',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Silicon Valley of India, known for IT industry and pleasant weather',
      famousFood: [
        { name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: '₹60-120' },
        { name: 'Bisi Bele Bath', description: 'Spicy rice and lentil dish', price: '₹80-150' },
        { name: 'Mysore Pak', description: 'Sweet made from gram flour and ghee', price: '₹40-80' },
        { name: 'Rava Idli', description: 'Semolina steamed cakes', price: '₹50-90' }
      ],
      attractions: [
        { name: 'Lalbagh Botanical Garden', type: 'Botanical Paradise' },
        { name: 'Bangalore Palace', type: 'Royal Architecture' },
        { name: 'Cubbon Park', type: 'Urban Green Space' },
        { name: 'ISKCON Temple', type: 'Modern Temple' }
      ],
      culture: 'Cosmopolitan tech hub with pub culture, young demographics, and modern lifestyle',
      history: 'Founded by Kempe Gowda, evolved from garden city to India\'s technology capital'
    },
    {
      id: 'jaipur',
      name: 'Jaipur',
      state: 'Rajasthan',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pink City known for palaces, forts, and royal heritage',
      famousFood: [
        { name: 'Dal Baati Churma', description: 'Lentils with baked wheat balls', price: '₹120-200' },
        { name: 'Laal Maas', description: 'Spicy red mutton curry', price: '₹250-400' },
        { name: 'Ghewar', description: 'Honeycomb-like sweet', price: '₹50-100' },
        { name: 'Pyaaz Kachori', description: 'Fried pastry with onion filling', price: '₹20-40' }
      ],
      attractions: [
        { name: 'Hawa Mahal', type: 'Palace of Winds' },
        { name: 'Amber Fort', type: 'Hilltop Fort' },
        { name: 'City Palace', type: 'Royal Residence' },
        { name: 'Jantar Mantar', type: 'Astronomical Observatory' }
      ],
      culture: 'Royal Rajasthani culture with colorful festivals, folk music, dance, and handicrafts',
      history: 'Founded by Maharaja Sawai Jai Singh II, planned city with rich Rajput heritage'
    }
  ];

  const selectedCityData = cities.find(city => city.id === selectedCity);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-amber-100 rounded-full w-16 h-16 mx-auto mb-4">
            <Compass className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Destination Gyaan</h1>
          <p className="text-gray-600">Explore local food, culture, and attractions at your destination</p>
        </div>

        {!selectedCity ? (
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city.id)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{city.name}</h3>
                      <p className="text-sm opacity-90">{city.state}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm">{city.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Back Button */}
            <button
              onClick={() => setSelectedCity('')}
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Cities</span>
            </button>

            {/* City Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={selectedCityData?.image} 
                  alt={selectedCityData?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{selectedCityData?.name}</h1>
                  <p className="text-xl opacity-90">{selectedCityData?.state}</p>
                  <p className="text-lg opacity-80 mt-2">{selectedCityData?.description}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Famous Food */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Utensils className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Famous Food</h2>
                </div>
                <div className="space-y-4">
                  {selectedCityData?.famousFood.map((food, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900">{food.name}</h3>
                        <span className="text-green-600 font-semibold">{food.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{food.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attractions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Camera className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Must-Visit Attractions</h2>
                </div>
                <div className="space-y-4">
                  {selectedCityData?.attractions.map((attraction, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-1">{attraction.name}</h3>
                      <span className="text-blue-600 text-sm font-medium">{attraction.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Culture & Arts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="h-6 w-6 text-pink-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Culture & Arts</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedCityData?.culture}</p>
              </div>

              {/* History */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="h-6 w-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Historical Background</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedCityData?.history}</p>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Travel Tips</h3>
              <div className="grid md:grid-cols-2 gap-4 text-amber-700">
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Best Time to Visit</p>
                    <p className="text-sm">October to March for pleasant weather</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Getting Around</p>
                    <p className="text-sm">Use local transport apps and pre-paid taxis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Local Etiquette</p>
                    <p className="text-sm">Respect local customs and dress modestly at religious sites</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Utensils className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Food Safety</p>
                    <p className="text-sm">Try street food from busy stalls and drink bottled water</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationGuide;