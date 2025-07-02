import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Train {
  id: string;
  train_number: string;
  train_name: string;
  from_station: string;
  to_station: string;
  departure_time: string;
  arrival_time: string;
  duration: string;
  price: number;
  available_seats: number;
  rating: number;
  created_at: string;
}

export interface Complaint {
  id: string;
  user_id: string;
  type: 'theft' | 'food' | 'facilities' | 'harassment' | 'other';
  title: string;
  description: string;
  location: string;
  train_number?: string;
  status: 'pending' | 'investigating' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  created_at: string;
  updated_at: string;
}

export interface SafetyAlert {
  id: string;
  user_id: string;
  type: 'panic' | 'emergency' | 'suspicious';
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'responded' | 'resolved';
  created_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  train_number?: string;
  type: 'train' | 'food' | 'coach' | 'facility';
  title: string;
  content: string;
  rating: number;
  location: string;
  helpful_count: number;
  created_at: string;
}