import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CoachModel from '../components/CoachModel';
import {
  Train,
  MapPin,
  Clock,
  Navigation,
  Signal,
  RefreshCw,
} from 'lucide-react';

const CoachTracker: React.FC = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [coachNumber, setCoachNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [location, setLocation] = useState({
    station: 'Approaching Kota Junction',
    platform: 'Platform 2',
    speed: '85 km/h',
    nextStation: 'Sawai Madhopur',
    eta: '14:30',
  });

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setLocation((prev) => ({
          ...prev,
          speed: `${Math.floor(Math.random() * 40) + 60} km/h`,
        }));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        
        {/* 🔥 INTERACTIVE HEADER */}
        <div className="relative text-center mb-10">
          {/* Glowing background blob */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-64 h-64 bg-gradient-to-tr from-blue-300 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Actual header text */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 transition-transform duration-500 hover:scale-105">
              <span role="img" aria-label="train" className="inline-block animate-bounce mr-2">
                🚆
              </span>
              Live Coach Tracker
            </h1>
            <p className="text-lg text-gray-600 animate-fadeIn">
              Get real-time updates of your train coach in style.
            </p>
          </div>
        </div>

        {/* Form / Tracking View */}
        {!isTracking ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Train Number</label>
                <input
                  type="text"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="e.g., 12951"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Coach Number</label>
                <input
                  type="text"
                  value={coachNumber}
                  onChange={(e) => setCoachNumber(e.target.value)}
                  placeholder="e.g., B4"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={() => setIsTracking(true)}
              disabled={!trainNumber || !coachNumber}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              <Navigation className="h-5 w-5" />
              Start Tracking
            </button>
          </div>
        ) : (
          <>
            {/* Status Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-100 rounded-lg shadow">
                <MapPin className="text-blue-600 h-6 w-6 mb-2" />
                <h4 className="text-sm font-semibold text-gray-700">Current Location</h4>
                <p className="text-blue-700">{location.station}</p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg shadow">
                <Train className="text-purple-600 h-6 w-6 mb-2" />
                <h4 className="text-sm font-semibold text-gray-700">Speed</h4>
                <p className="text-purple-700">{location.speed}</p>
              </div>
              <div className="p-4 bg-yellow-100 rounded-lg shadow">
                <Clock className="text-yellow-600 h-6 w-6 mb-2" />
                <h4 className="text-sm font-semibold text-gray-700">Next Station</h4>
                <p className="text-yellow-700">{location.nextStation}</p>
                <p className="text-xs text-yellow-600">ETA: {location.eta}</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <Signal className="text-green-600 h-6 w-6 mb-2" />
                <h4 className="text-sm font-semibold text-gray-700">Platform</h4>
                <p className="text-green-700">{location.platform}</p>
              </div>
            </div>

            {/* 3D Model Canvas */}
            <div className="rounded-lg border shadow overflow-hidden mb-6">
              <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <CoachModel />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setIsTracking(false)}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Stop Tracking
              </button>
              <button
                onClick={() =>
                  setLocation((prev) => ({
                    ...prev,
                    station: 'On route to Jaipur',
                    nextStation: 'Jaipur Junction',
                    eta: '15:45',
                  }))
                }
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4 animate-spin" />
                Simulate Update
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoachTracker;
