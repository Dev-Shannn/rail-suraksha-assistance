import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { 
  Shield, 
  Mic, 
  Video, 
  MapPin, 
  Phone, 
  Users, 
  AlertTriangle,
  Clock,
  CheckCircle,
  Volume2,
  Camera,
  Ambulance,
  X,
} from 'lucide-react';

const SafetyDashboard: React.FC = () => {
  const [showEmergencyMenu, setShowEmergencyMenu] = useState(false);
  const [isPanicActive, setIsPanicActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(true);

  const [recentAlerts, setRecentAlerts] = useState([
    {
      id: 1,
      type: 'panic',
      location: 'Coach B4, Train 12951',
      time: '2 minutes ago',
      status: 'active',
      responder: 'RPF Team Delhi'
    },
    {
      id: 2,
      type: 'harassment',
      location: 'Platform 3, New Delhi',
      time: '15 minutes ago',
      status: 'resolved',
      responder: 'Station Security'
    }
  ]);

  const emergencyContacts = [
    { name: 'Railway Police', number: '139', type: 'primary' },
    { name: 'Women Helpline', number: '1091', type: 'secondary' },
    { name: 'Emergency Services', number: '112', type: 'secondary' }
  ];

  const safetyFeatures = [
    {
      icon: Mic,
      title: 'Voice Detection',
      description: 'Always listening for "Help" or "Bachao"',
      status: 'Active',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Live Location',
      description: 'GPS tracking for emergency response',
      status: 'Active',
      color: 'text-green-500'
    },
    {
      icon: Camera,
      title: 'Auto Recording',
      description: 'Emergency video/audio capture',
      status: 'Ready',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Quick Contacts',
      description: 'Instant access to help numbers',
      status: 'Connected',
      color: 'text-green-500'
    }
  ];

  const activatePanic = () => {
    setIsPanicActive(true);
    setIsRecording(true);
    setCountdown(10); // 10 seconds countdown
    setShowEmergencyMenu(false);

    // Simulate location sharing and alerts
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Here would trigger actual emergency protocols
          sendEmergencyAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendEmergencyAlert = () => {
    // Simulate emergency alert sending
    console.log('Emergency alert sent to Railway Police and family contacts');
    setIsPanicActive(false);
    setIsRecording(false);
    setShowSuccessMessage(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const cancelPanic = () => {
    setIsPanicActive(false);
    setIsRecording(false);
    setCountdown(0);
  };

  const handleEmergencyCall = (type: string) => {
    setShowEmergencyMenu(false);
    let number = '';
    let message = '';

    switch (type) {
      case 'police':
        number = '139';
        message = 'Connecting to Railway Police...';
        break;
      case 'ambulance':
        number = '108';
        message = 'Calling Ambulance...';
        break;
      case 'women':
        number = '1091';
        message = 'Connecting to Women Helpline...';
        break;
      default:
        return;
    }

    alert(`${message}\nDialing ${number}`);
  };

  // Auto-trigger panic button on component mount
  useEffect(() => {
    activatePanic();
  }, []);

  // Success Message Popup
  if (showSuccessMessage) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Alert Sent Successfully!</h2>
            <p className="text-gray-600 mb-4">Emergency call has been sent to the nearest local police station and Railway Police Force.</p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="text-green-800 text-sm space-y-1 text-left">
                <p>✓ Location shared with authorities</p>
                <p>✓ Emergency contacts notified</p>
                <p>✓ Audio/Video recording started</p>
                <p>✓ Railway Police alerted</p>
              </div>
            </div>

            <button 
              onClick={() => setShowSuccessMessage(false)}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Emergency Menu with ALL safety features
  if (showEmergencyMenu) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Emergency & Safety</h2>
              <button 
                onClick={() => setShowEmergencyMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Panic Button */}
              <button 
                onClick={activatePanic}
                className="w-full p-6 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
                <h3 className="text-lg font-bold mb-1">PANIC BUTTON</h3>
                <p className="text-red-100 text-sm">Immediate emergency alert</p>
              </button>

              {/* Voice Commands Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-blue-800">Voice Commands</span>
                  </div>
                  <button
                    onClick={() => setIsVoiceActive(!isVoiceActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      isVoiceActive ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        isVoiceActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-blue-700 text-sm">Say "Help" or "Bachao" to activate panic button</p>
                {isVoiceActive && (
                  <div className="mt-2 flex items-center space-x-2 text-green-600 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Voice commands active</span>
                  </div>
                )}
              </div>

              {/* Safety Features Status */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Safety Features</h3>

                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-800">Live Location</p>
                      <p className="text-sm text-green-600">GPS tracking active</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mic className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-blue-800">Voice Detection</p>
                      <p className="text-sm text-blue-600">Listening for distress calls</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-purple-800">Auto Recording</p>
                      <p className="text-sm text-purple-600">Recording emergency video/audio</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium text-yellow-800">Quick Contacts</p>
                      <p className="text-sm text-yellow-600">Instantly reachable emergency numbers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Contacts</h3>
                <div className="space-y-3">
                  {emergencyContacts.map((contact) => (
                    <button
                      key={contact.number}
                      onClick={() => handleEmergencyCall(contact.type)}
                      className={`w-full p-3 rounded-lg border ${
                        contact.type === 'primary'
                          ? 'bg-red-600 text-white border-red-700 hover:bg-red-700'
                          : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-900'
                      } flex items-center justify-between`}
                    >
                      <span>{contact.name}</span>
                      <span className="font-semibold">{contact.number}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Panic Button Active with countdown and Cancel
  if (isPanicActive) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="bg-red-600 rounded-3xl p-8 max-w-md w-full text-center shadow-lg animate-pulse">
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-white" />
            <h2 className="text-white text-3xl font-bold mb-2">Emergency Activated</h2>
            <p className="text-red-100 text-lg mb-4">Sharing live location and alerting authorities</p>
            <p className="text-white text-5xl font-extrabold mb-6">{countdown}</p>
            <button
              onClick={cancelPanic}
              className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Cancel Alert
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Default Dashboard view (non-emergency)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Safety Dashboard</h1>

        {/* Show Panic Button */}
        <button
          onClick={() => setShowEmergencyMenu(true)}
          className="w-full max-w-xs mx-auto p-6 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg block"
        >
          <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
          <h3 className="text-lg font-bold mb-1">PANIC BUTTON</h3>
          <p className="text-red-100 text-sm">Immediate emergency alert</p>
        </button>

        {/* Safety Features Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Active Safety Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyFeatures.map(({ icon: Icon, title, description, status, color }) => (
              <li
                key={title}
                className="bg-white p-4 rounded-lg shadow flex items-center space-x-4"
              >
                <Icon className={`h-8 w-8 ${color}`} />
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-600 text-sm">{description}</p>
                  <p className={`text-xs mt-1 font-semibold ${color}`}>{status}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Alerts */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Recent Alerts</h2>
          <ul className="space-y-3">
            {recentAlerts.map(({ id, type, location, time, status, responder }) => (
              <li
                key={id}
                className={`p-4 rounded-lg shadow ${
                  status === 'active' ? 'bg-red-50 border border-red-400' : 'bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold capitalize">{type} alert</h3>
                  <span
                    className={`text-xs font-semibold uppercase ${
                      status === 'active' ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{location}</p>
                <p className="text-xs text-gray-500">{time}</p>
                <p className="text-xs text-gray-500 italic">Responder: {responder}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default SafetyDashboard;
