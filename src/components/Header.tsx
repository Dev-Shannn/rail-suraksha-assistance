import React, { useState } from 'react';
import { Train, Shield, Phone, Menu, X, MapPin, AlertTriangle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b-2 border-red-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-red-500 rounded-lg group-hover:bg-red-600 transition-colors">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">RAIL SURAKSHA</span>
              <span className="text-xl font-bold text-red-500"> ASSISTANT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Book Trains
            </Link>
            <Link to="/hotel-booking" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Hotels
            </Link>
            <Link to="/train-status" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Train Status
            </Link>
            <Link to="/pnr-status" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              PNR Status
            </Link>
            <Link to="/safety" className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors font-medium">
              <Shield className="h-4 w-4" />
              <span>Safety</span>
            </Link>
            <Link to="/complaint" className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Complaints</span>
            </Link>
          </nav>

          {/* Emergency & Help */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Help: 139</span>
            </button>
            <Link to="/admin" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Settings className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Trains
              </Link>
              <Link 
                to="/hotel-booking" 
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hotels
              </Link>
              <Link 
                to="/train-status" 
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Train Status
              </Link>
              <Link 
                to="/pnr-status" 
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                PNR Status
              </Link>
              <Link 
                to="/safety" 
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="h-4 w-4" />
                <span>Safety Dashboard</span>
              </Link>
              <Link 
                to="/complaint" 
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>File Complaint</span>
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 w-full px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Emergency Help: 139</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;