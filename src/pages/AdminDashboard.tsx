import React, { useState } from 'react';
import Header from '../components/Header';
import AdminLogin from '../components/AdminLogin';
import { 
  MapPin, 
  AlertTriangle, 
  Clock, 
  Users, 
  CheckCircle,
  Play,
  Image,
  Mic,
  Filter,
  Download,
  BarChart3,
  Settings,
  Lock,
  Eye,
  EyeOff,
  Save
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleLogin = (username: string, password: string) => {
    if (username === 'AYUSH123' && password === 'ayushhhh') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      alert('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowSettings(false);
    } else {
      alert('Passwords do not match or are too short!');
    }
  };

  const complaints = [
    {
      id: 'C001',
      type: 'panic',
      title: 'Emergency panic button activated',
      description: 'Passenger reported feeling unsafe in coach B4',
      location: 'Coach B4, Train 12951, New Delhi to Mumbai',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      status: 'active',
      priority: 'high',
      time: '2 minutes ago',
      passenger: 'Anonymous',
      media: ['audio', 'video', 'location'],
      responder: null
    },
    {
      id: 'C002',
      type: 'theft',
      title: 'Mobile phone stolen',
      description: 'Passenger reports phone stolen from berth during sleep',
      location: 'Coach A1, Train 12621, Tamil Nadu Express',
      coordinates: { lat: 13.0827, lng: 80.2707 },
      status: 'investigating',
      priority: 'high',
      time: '1 hour ago',
      passenger: 'Raj Kumar',
      media: ['image'],
      responder: 'RPF Team Chennai'
    },
    {
      id: 'C003',
      type: 'food',
      title: 'Overpriced food complaint',
      description: 'Vendor charging ₹50 for ₹20 water bottle',
      location: 'Platform 3, Howrah Station',
      coordinates: { lat: 22.5726, lng: 88.3639 },
      status: 'resolved',
      priority: 'medium',
      time: '3 hours ago',
      passenger: 'Priya Singh',
      media: ['image', 'audio'],
      responder: 'Station Manager'
    },
    {
      id: 'C004',
      type: 'facilities',
      title: 'Washroom facility issue',
      description: 'Washroom in coach C2 is extremely dirty and no water',
      location: 'Coach C2, Train 12840, Howrah Mail',
      coordinates: { lat: 22.5726, lng: 88.3639 },
      status: 'pending',
      priority: 'medium',
      time: '5 hours ago',
      passenger: 'Anonymous',
      media: ['image'],
      responder: null
    }
  ];

  const stats = [
    { label: 'Active Alerts', value: '12', color: 'bg-red-500', icon: AlertTriangle },
    { label: 'Total Complaints', value: '847', color: 'bg-blue-500', icon: BarChart3 },
    { label: 'Resolved Today', value: '156', color: 'bg-green-500', icon: CheckCircle },
    { label: 'Avg Response', value: '1.8m', color: 'bg-purple-500', icon: Clock }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-700 border-red-200';
      case 'investigating': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'resolved': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const filteredComplaints = selectedFilter === 'all' 
    ? complaints 
    : complaints.filter(c => c.type === selectedFilter);

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Railway Police Dashboard</h1>
            <p className="text-gray-600">Monitor and respond to passenger safety alerts and complaints</p>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Admin Settings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type={showPasswords.current ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPasswords({...showPasswords, current: !showPasswords.current})}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type={showPasswords.new ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type={showPasswords.confirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handlePasswordChange}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    <span>Update Password</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Username:</span>
                    <span className="font-medium text-gray-900">AYUSH123</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Role:</span>
                    <span className="font-medium text-gray-900">Super Admin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Login:</span>
                    <span className="font-medium text-gray-900">Today, 10:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Access Level:</span>
                    <span className="font-medium text-green-600">Full Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 ${stat.color} rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Complaints List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg">
              {/* Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Live Complaints Feed</h2>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['all', 'panic', 'theft', 'food', 'facilities'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedFilter === filter
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complaints List */}
              <div className="p-6">
                <div className="space-y-4">
                  {filteredComplaints.map((complaint, index) => (
                    <div
                      key={complaint.id}
                      onClick={() => setSelectedComplaint(complaint)}
                      className={`p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md animate-slide-in-up ${
                        selectedComplaint?.id === complaint.id ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full mt-2 ${getPriorityColor(complaint.priority)}`}></div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{complaint.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{complaint.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(complaint.status)}`}>
                            {complaint.status}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{complaint.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{complaint.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {complaint.media.includes('audio') && (
                            <div className="p-1 bg-blue-100 rounded">
                              <Mic className="h-3 w-3 text-blue-500" />
                            </div>
                          )}
                          {complaint.media.includes('video') && (
                            <div className="p-1 bg-purple-100 rounded">
                              <Play className="h-3 w-3 text-purple-500" />
                            </div>
                          )}
                          {complaint.media.includes('image') && (
                            <div className="p-1 bg-green-100 rounded">
                              <Image className="h-3 w-3 text-green-500" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Complaint Details Sidebar */}
          <div className="space-y-6">
            {selectedComplaint ? (
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Complaint Details</h2>
                  <span className="text-sm text-gray-500">#{selectedComplaint.id}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{selectedComplaint.title}</h3>
                    <p className="text-gray-600 text-sm">{selectedComplaint.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <div className={`mt-1 px-2 py-1 rounded-full text-xs font-medium border inline-block ${getStatusColor(selectedComplaint.status).replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                        {selectedComplaint.status}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Priority:</span>
                      <div className={`mt-1 font-medium ${getPriorityColor(selectedComplaint.priority)}`}>
                        {selectedComplaint.priority.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Location:</span>
                    <div className="mt-1 flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{selectedComplaint.location}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Passenger:</span>
                    <div className="mt-1 flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{selectedComplaint.passenger}</span>
                    </div>
                  </div>

                  {selectedComplaint.media.length > 0 && (
                    <div>
                      <span className="text-gray-500 text-sm mb-2 block">Media Evidence:</span>
                      <div className="flex space-x-2">
                        {selectedComplaint.media.includes('audio') && (
                          <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                            <Mic className="h-4 w-4 text-blue-500" />
                          </button>
                        )}
                        {selectedComplaint.media.includes('video') && (
                          <button className="p-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
                            <Play className="h-4 w-4 text-purple-500" />
                          </button>
                        )}
                        {selectedComplaint.media.includes('image') && (
                          <button className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                            <Image className="h-4 w-4 text-green-500" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <div className="space-y-3">
                      <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
                        Assign to Team
                      </button>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Update Status
                      </button>
                      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Mark Resolved
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Select a complaint to view details</p>
              </div>
            )}

            {/* Live Map */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Live Location Map</h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map showing complaint locations</p>
                  <p className="text-sm text-gray-500 mt-1">Real-time GPS tracking active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;