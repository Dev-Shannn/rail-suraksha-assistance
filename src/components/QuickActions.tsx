import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  MapPin, 
  Star,
  FileText,
  Phone,
  Ambulance,
  Utensils,
  Sofa,
  Train,
  Gift,
  Building,
  ChefHat,
  Compass
} from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Safety Dashboard',
      description: 'Voice alerts, panic button, live tracking',
      icon: Shield,
      path: '/safety',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      title: 'File Complaint',
      description: 'Report theft, food issues, facility problems',
      icon: AlertTriangle,
      path: '/complaint',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
    {
      title: 'Train Status',
      description: 'Live running status and delay information',
      icon: Clock,
      path: '/train-status',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      title: 'PNR Status',
      description: 'Check booking status and seat details',
      icon: FileText,
      path: '/pnr-status',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      title: 'Hotel Booking',
      description: 'Find hotels near railway stations',
      icon: Building,
      path: '/hotel-booking',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700'
    },
    {
      title: 'Live Tracking',
      description: 'Real-time train location and platform info',
      icon: MapPin,
      path: '/tracking',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      title: 'Reviews & Ratings',
      description: 'Rate coaches, vendors, and facilities',
      icon: Star,
      path: '/reviews',
      color: 'from-yellow-500 to-yellow-600',
      hoverColor: 'hover:from-yellow-600 hover:to-yellow-700'
    },
    {
      title: 'Refund Status',
      description: 'Track cancellation and refund processing',
      icon: CreditCard,
      path: '/refund',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-700'
    },
    {
      title: 'Emergency Contacts',
      description: 'Railway helplines and local police',
      icon: Phone,
      path: '/emergency',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800'
    },
    {
      title: 'One Call Police',
      description: 'Direct connection to Railway Police',
      icon: Phone,
      path: '/police-call',
      color: 'from-red-700 to-red-800',
      hoverColor: 'hover:from-red-800 hover:to-red-900'
    },
    {
      title: 'Ambulance',
      description: 'Emergency medical assistance',
      icon: Ambulance,
      path: '/ambulance',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700'
    },
    {
      title: 'Live Food Complaint',
      description: 'Report food quality issues instantly',
      icon: Utensils,
      path: '/food-complaint',
      color: 'from-orange-600 to-orange-700',
      hoverColor: 'hover:from-orange-700 hover:to-orange-800'
    },
    {
      title: 'Seat/Interior Review',
      description: 'Rate coach cleanliness and comfort',
      icon: Sofa,
      path: '/seat-review',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700'
    },
    {
      title: 'Live Coach Tracker',
      description: 'Track your coach location in real-time',
      icon: Train,
      path: '/coach-tracker',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-700'
    },
    {
      title: 'Food to Seat',
      description: 'Order food delivery to your seat',
      icon: ChefHat,
      path: '/food-to-seat',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700'
    },
    {
      title: 'Offers',
      description: 'Special discounts and travel deals',
      icon: Gift,
      path: '/offers',
      color: 'from-violet-500 to-violet-600',
      hoverColor: 'hover:from-violet-600 hover:to-violet-700'
    },
    {
      title: 'Destination Gyaan',
      description: 'Explore local food, culture, and attractions',
      icon: Compass,
      path: '/destination-guide',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'hover:from-amber-600 hover:to-amber-700'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Actions</h2>
          <p className="text-gray-600">Everything you need for a safe and comfortable journey</p>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">All Services Active</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${action.color} ${action.hoverColor} text-white transition-all duration-200 transform hover:scale-105 hover:shadow-xl`}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 group-hover:from-black/20 group-hover:to-black/40 transition-all duration-200"></div>
              
              {/* Content */}
              <div className="relative p-6 flex flex-col h-full min-h-[160px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-200"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-200">
                    {action.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-200">
                    {action.description}
                  </p>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Emergency Helpline Banner */}
      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border-2 border-red-200 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-orange-100/50"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-500 rounded-full shadow-lg">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-red-800 mb-1">24/7 Emergency Helpline</div>
              <div className="text-red-600">For immediate assistance during travel</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-red-600 mb-1">139</div>
            <div className="text-sm text-red-500 font-medium">Toll Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;