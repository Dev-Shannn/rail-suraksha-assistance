import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Train, Complaint, SafetyAlert, Review } from '../lib/supabase';

// Hook for fetching trains
export const useTrains = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('trains')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTrains(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { trains, loading, error, refetch: fetchTrains };
};

// Hook for managing complaints
export const useComplaints = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComplaints(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createComplaint = async (complaint: Omit<Complaint, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('complaints')
        .insert([complaint])
        .select()
        .single();

      if (error) throw error;
      setComplaints(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create complaint');
      throw err;
    }
  };

  return { complaints, loading, error, createComplaint, refetch: fetchComplaints };
};

// Hook for safety alerts
export const useSafetyAlerts = () => {
  const [alerts, setAlerts] = useState<SafetyAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('safety_alerts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAlerts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createAlert = async (alert: Omit<SafetyAlert, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('safety_alerts')
        .insert([alert])
        .select()
        .single();

      if (error) throw error;
      setAlerts(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create alert');
      throw err;
    }
  };

  return { alerts, loading, error, createAlert, refetch: fetchAlerts };
};

// Hook for reviews
export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createReview = async (review: Omit<Review, 'id' | 'created_at' | 'helpful_count'>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([{ ...review, helpful_count: 0 }])
        .select()
        .single();

      if (error) throw error;
      setReviews(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create review');
      throw err;
    }
  };

  return { reviews, loading, error, createReview, refetch: fetchReviews };
};