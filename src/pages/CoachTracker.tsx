import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CoachModel from '../components/CoachModel';
import {
  Train,
  MapPin,
  Clock,
  Navigation,
  Signal
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
    eta: '14:30'
  });

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setLocation((prev) => ({
          ...prev,
          speed: `${Math.floor(Math.random() * 40) + 60} km/h`
        }));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🚆 Live Coach Tracker
        </h1>

        {!isTracking ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Train Number</label>
                <input
                  type="text"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="e.g., 12951"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Coach Number</label>
                <input
                  type="text"
                  value={coachNumber}
                  onChange={(e) => setCoachNumber(e.target.value)}
                  placeholder="e.g., B4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <button
              onClick={() => setIsTracking(true)}
              disabled={!trainNumber || !coachNumber}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              <div className="flex items-center justify-center gap-2">
                <Navigation className="h-5 w-5" />
                <span>Start Tracking</span>
              </div>
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-green-600 font-medium">
                Tracking: Train {trainNumber} - Coach {coachNumber}
              </p>
              <p className="text-sm text-gray-500">Live updates every 5 seconds</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded text-center">
                <MapPin className="mx-auto mb-1 text-blue-500" />
                <p className="text-sm font-medium">Current Location</p>
                <p className="text-blue-700">{location.station}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded text-center">
                <Train className="mx-auto mb-1 text-purple-500" />
                <p className="text-sm font-medium">Speed</p>
                <p className="text-purple-700">{location.speed}</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded text-center">
                <Clock className="mx-auto mb-1 text-yellow-500" />
                <p className="text-sm font-medium">Next Station</p>
                <p className="text-yellow-700">{location.nextStation}</p>
                <p className="text-xs text-yellow-600">ETA: {location.eta}</p>
              </div>
              <div className="p-4 bg-green-50 rounded text-center">
                <Signal className="mx-auto mb-1 text-green-500" />
                <p className="text-sm font-medium">Platform</p>
                <p className="text-green-700">{location.platform}</p>
              </div>
            </div>

            <div className="h-[400px] border rounded-lg overflow-hidden mb-6">
              <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 10]} />
                <CoachModel />
                <OrbitControls />
              </Canvas>
            </div>

            <button
              onClick={() => setIsTracking(false)}
              className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700"
            >
              Stop Tracking
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CoachTracker;
