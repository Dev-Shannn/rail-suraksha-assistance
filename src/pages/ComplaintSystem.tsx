// Import dependencies and icons
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  AlertTriangle, 
  Camera, 
  Mic, 
  FileText, 
  Star, 
  Upload,
  MapPin,
  Clock,
  User,
  ShoppingBag,
  Utensils,
  Wifi
} from 'lucide-react';

const ComplaintSystem: React.FC = () => {
  // State for form fields and media
  const [selectedType, setSelectedType] = useState('');
  const [complaint, setComplaint] = useState('');
  const [location, setLocation] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [hasMedia, setHasMedia] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const cameraInputRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Complaint types for selection
  const complaintTypes = [
    {
      id: 'theft',
      title: 'Theft & Crime',
      description: 'Report stolen goods, harassment, or criminal activity',
      icon: AlertTriangle,
      color: 'bg-red-500',
      examples: ['Stolen luggage', 'Harassment', 'Pickpocketing', 'Verbal abuse']
    },
    {
      id: 'food',
      title: 'Food & Vendor Issues',
      description: 'Report overpriced, stale food or fake vendor behavior',
      icon: Utensils,
      color: 'bg-orange-500',
      examples: ['Overpriced food', 'Stale/spoiled food', 'Fake vendors', 'No bill provided']
    },
    {
      id: 'facilities',
      title: 'Facility Problems',
      description: 'Report dirty washrooms, broken AC, missing amenities',
      icon: Wifi,
      color: 'bg-blue-500',
      examples: ['Dirty washrooms', 'No water', 'Broken AC/fans', 'Faulty lights']
    },
    {
      id: 'review',
      title: 'Coach/Train Review',
      description: 'Rate and review your travel experience',
      icon: Star,
      color: 'bg-yellow-500',
      examples: ['Cleanliness rating', 'Staff behavior', 'Comfort level', 'Safety rating']
    }
  ];

  // Recent complaints for sidebar
  const recentComplaints = [
    {
      id: 'C001',
      type: 'theft',
      title: 'Stolen mobile phone',
      location: 'Coach B4, Train 12951',
      status: 'investigating',
      time: '2 hours ago'
    },
    {
      id: 'C002',
      type: 'food',
      title: 'Overpriced water bottle',
      location: 'Platform 3, New Delhi',
      status: 'resolved',
      time: '1 day ago'
    }
  ];

  // Handle complaint form submission
  const handleSubmitComplaint = () => {
    if (selectedType && complaint && location) {
      // Simulate complaint submission (replace with API call as needed)
      console.log('Complaint submitted:', {
        type: selectedType,
        description: complaint,
        location,
        trainNumber,
        hasMedia
      });
      // Reset form fields
      setSelectedType('');
      setComplaint('');
      setLocation('');
      setTrainNumber('');
      setHasMedia(false);
      alert('Complaint submitted successfully! Your complaint ID is C003');
    }
  };

  // Start audio recording using MediaRecorder API
  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Audio recording is not supported in this browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      setAudioChunks([]);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) setAudioChunks((prev) => [...prev, e.data]);
      };
      recorder.onstop = () => {
        // Create audio file from recorded chunks
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const file = new File([audioBlob], `voice_note_${Date.now()}.webm`, { type: 'audio/webm' });
        setAudioFile(file);
        setHasMedia(true);
      };
      recorder.start();
      setIsRecording(true);
    } catch (err) {
      alert('Could not start audio recording.');
    }
  };

  // Stop audio recording
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  // Render the complaint system UI
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complaint & Review System</h1>
          <p className="text-gray-600">Report issues and help improve railway services for everyone</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Complaint Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complaint Type Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">What would you like to report?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Render complaint type buttons */}
                {complaintTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 border-2 rounded-xl transition-all text-left ${
                        selectedType === type.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 ${type.color} rounded-lg`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                          <div className="text-xs text-gray-500">
                            Examples: {type.examples.slice(0, 2).join(', ')}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Complaint Details Form (shown after type selection) */}
            {selectedType && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Complaint Details</h2>
                <div className="space-y-6">
                  {/* Location and Train Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location/Coach Number
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g., Coach B4, Platform 2"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Train Number (Optional)
                      </label>
                      <input
                        type="text"
                        value={trainNumber}
                        onChange={(e) => setTrainNumber(e.target.value)}
                        placeholder="e.g., 12951"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  {/* Description Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe the issue
                    </label>
                    <textarea
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                      rows={4}
                      placeholder="Please provide details about the incident..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    />
                  </div>
                  {/* Media Upload Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add Evidence (Optional)
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Take Photo Button */}
                      <button
                        type="button"
                        onClick={() => cameraInputRef.current?.click()}
                        className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center"
                      >
                        <Camera className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">Take Photo</span>
                      </button>
                      {/* Hidden file input for camera */}
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        ref={cameraInputRef}
                        style={{ display: 'none' }}
                        onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            setMediaFile(e.target.files[0]);
                            setHasMedia(true);
                          }
                        }}
                      />
                      {/* Voice Note Button (start/stop) */}
                      {!isRecording ? (
                        <button
                          type="button"
                          onClick={startRecording}
                          className={`p-4 border-2 border-dashed rounded-lg transition-colors text-center border-gray-300 hover:border-gray-400`}
                        >
                          <Mic className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                          <span className="text-sm text-gray-600">Voice Note</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={stopRecording}
                          className="p-4 border-2 border-dashed rounded-lg transition-colors text-center border-red-300 bg-red-50"
                        >
                          <Mic className="h-6 w-6 mx-auto mb-2 text-red-500 animate-pulse" />
                          <span className="text-sm text-gray-600">Stop Recording...</span>
                        </button>
                      )}
                      {/* Upload File Button */}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center"
                      >
                        <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">Upload File</span>
                      </button>
                      {/* Hidden file input for upload */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            setMediaFile(e.target.files[0]);
                            setHasMedia(true);
                          }
                        }}
                      />
                    </div>
                    {/* Show attached media/voice note */}
                    {hasMedia && (mediaFile || audioFile) && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        {mediaFile && <p className="text-sm text-green-700">Media attached: {mediaFile.name}</p>}
                        {audioFile && <p className="text-sm text-green-700">Voice note attached: {audioFile.name}</p>}
                      </div>
                    )}
                  </div>
                  {/* Submit Button */}
                  <button
                    onClick={handleSubmitComplaint}
                    disabled={!selectedType || !complaint || !location}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Complaint
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Sidebar with recent complaints, quick actions, and guidelines */}
          <div className="space-y-6">
            {/* Recent Complaints */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Recent Complaints</h2>
              <div className="space-y-4">
                {recentComplaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{complaint.title}</h3>
                      <span className="text-xs text-gray-500">#{complaint.id}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{complaint.location}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        complaint.status === 'resolved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {complaint.status}
                      </span>
                      <span className="text-xs text-gray-500">{complaint.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {/* Emergency Alert Button */}
                <button className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-medium">Emergency Alert</span>
                  </div>
                </button>
                {/* Track Complaint Button */}
                <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">Track Complaint</span>
                  </div>
                </button>
                {/* Leave Review Button */}
                <button className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-left">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5" />
                    <span className="font-medium">Leave Review</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Complaint Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Guidelines</h2>
              <div className="space-y-3 text-sm text-gray-600">
                {/* List of guidelines */}
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Provide accurate location and train details</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Include photos or audio evidence when possible</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>For emergencies, use the panic button immediately</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Track your complaint using the provided ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSystem;
