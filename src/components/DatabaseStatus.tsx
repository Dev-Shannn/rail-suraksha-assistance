import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Database, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const DatabaseStatus: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      setStatus('checking');
      
      // Test the connection by trying to fetch from a system table
      const { data, error } = await supabase
        .from('trains')
        .select('count')
        .limit(1);

      if (error) {
        throw error;
      }

      setStatus('connected');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Connection failed');
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <Loader className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'connected':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'checking':
        return 'Checking database connection...';
      case 'connected':
        return 'Database connected successfully';
      case 'error':
        return `Database connection failed: ${error}`;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'checking':
        return 'border-blue-200 bg-blue-50';
      case 'connected':
        return 'border-green-200 bg-green-50';
      case 'error':
        return 'border-red-200 bg-red-50';
    }
  };

  return (
    <div className={`p-4 border rounded-lg ${getStatusColor()}`}>
      <div className="flex items-center space-x-3">
        <Database className="h-6 w-6 text-gray-600" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <span className="font-medium text-gray-900">Supabase Database</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{getStatusText()}</p>
        </div>
        {status === 'error' && (
          <button
            onClick={checkConnection}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default DatabaseStatus;