import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Train, MapPin, Clock, Navigation, Wifi, Signal } from 'lucide-react';

// 3D Model Viewer imports
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// 3D Coach Model component
function CoachModel() {
  // Try loading the model without a leading slash
  const gltf = useGLTF('scene.gltf');
  return <primitive object={gltf.scene} scale={2.5} />;
}

// Simple Box for debuggingno 

// Minimal Canvas test at the very top for debugging
function MinimalCanvasTest() {
  return (
    <div style={{ width: '400px', height: '400px', border: '4px solid blue', margin: '20px auto' }}>
      <Canvas style={{ width: '100%', height: '100%', background: 'red' }} camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#ff0000"]} />
        <ambientLight intensity={1} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

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
        // Simulate real-time updates
        setLocation(prev => ({
          ...prev,
          speed: `${Math.floor(Math.random() * 40) + 60} km/h`
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const handleStartTracking = () => {
    if (trainNumber && coachNumber) {
      setIsTracking(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Canvas test at the very top */}
      <MinimalCanvasTest />
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="p-4 bg-cyan-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Train className="h-8 w-8 text-cyan-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Live Coach Tracker</h1>
            <p className="text-gray-600">Track your coach location in real-time</p>
          </div>

          {!isTracking ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Train Number</label>
                  <input
                    type="text"
                    value={trainNumber}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    placeholder="e.g., 12951"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coach Number</label>
                  <input
                    type="text"
                    value={coachNumber}
                    onChange={(e) => setCoachNumber(e.target.value)}
                    placeholder="e.g., B4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={handleStartTracking}
                disabled={!trainNumber || !coachNumber}
                className="w-full bg-cyan-500 text-white py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Navigation className="h-5 w-5" />
                  <span>Start Live Tracking</span>
                </div>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 font-medium">Live Tracking Active</span>
                </div>
                <p className="text-green-600 text-sm">Train {trainNumber} - Coach {coachNumber}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-blue-800 font-medium">Current Location</p>
                  <p className="text-blue-600 text-sm">{location.station}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <Train className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-purple-800 font-medium">Speed</p>
                  <p className="text-purple-600 text-sm">{location.speed}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-orange-800 font-medium">Next Station</p>
                  <p className="text-orange-600 text-sm">{location.nextStation}</p>
                  <p className="text-orange-500 text-xs">ETA: {location.eta}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <Signal className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-green-800 font-medium">Platform</p>
                  <p className="text-green-600 text-sm">{location.platform}</p>
                </div>
              </div>

              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                {/* 3D Model Viewer */}
                <div style={{ width: '400px', height: '400px', border: '4px solid green', background: 'red' }}>
                  <Canvas camera={{ position: [0, 2, 8], fov: 50 }} style={{ width: '100%', height: '100%' }}>
                    <color attach="background" args={["#ff0000"]} />
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <CoachModel />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  </Canvas>
                </div>
              </div>

              <button
                onClick={() => setIsTracking(false)}
                className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Stop Tracking
              </button>
            </div>
          )}

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Tracking Features:</h4>
            <div className="text-blue-700 text-sm space-y-1">
              <p>• Real-time GPS location updates</p>
              <p>• Speed and platform information</p>
              <p>• Next station arrival time</p>
              <p>• Emergency location sharing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachTracker;