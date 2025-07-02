/*
  # Railway Application Database Schema

  1. New Tables
    - `trains`
      - `id` (uuid, primary key)
      - `train_number` (text, unique)
      - `train_name` (text)
      - `from_station` (text)
      - `to_station` (text)
      - `departure_time` (text)
      - `arrival_time` (text)
      - `duration` (text)
      - `price` (numeric)
      - `available_seats` (integer)
      - `rating` (numeric)
      - `created_at` (timestamp)

    - `complaints`
      - `id` (uuid, primary key)
      - `user_id` (text)
      - `type` (text with check constraint)
      - `title` (text)
      - `description` (text)
      - `location` (text)
      - `train_number` (text, nullable)
      - `status` (text with check constraint)
      - `priority` (text with check constraint)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `safety_alerts`
      - `id` (uuid, primary key)
      - `user_id` (text)
      - `type` (text with check constraint)
      - `location` (text)
      - `coordinates` (jsonb, nullable)
      - `status` (text with check constraint)
      - `created_at` (timestamp)

    - `reviews`
      - `id` (uuid, primary key)
      - `user_id` (text)
      - `train_number` (text, nullable)
      - `type` (text with check constraint)
      - `title` (text)
      - `content` (text)
      - `rating` (integer with check constraint)
      - `location` (text)
      - `helpful_count` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (for demo purposes)
    - Add policies for authenticated users to create records

  3. Sample Data
    - Insert sample trains data
    - Insert sample complaints
    - Insert sample reviews
*/

-- Create trains table
CREATE TABLE IF NOT EXISTS trains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  train_number text UNIQUE NOT NULL,
  train_name text NOT NULL,
  from_station text NOT NULL,
  to_station text NOT NULL,
  departure_time text NOT NULL,
  arrival_time text NOT NULL,
  duration text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  available_seats integer NOT NULL DEFAULT 0,
  rating numeric NOT NULL DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

-- Create complaints table
CREATE TABLE IF NOT EXISTS complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  type text NOT NULL CHECK (type IN ('theft', 'food', 'facilities', 'harassment', 'other')),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  train_number text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'investigating', 'resolved', 'closed')),
  priority text NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create safety_alerts table
CREATE TABLE IF NOT EXISTS safety_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  type text NOT NULL CHECK (type IN ('panic', 'emergency', 'suspicious')),
  location text NOT NULL,
  coordinates jsonb,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'responded', 'resolved')),
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  train_number text,
  type text NOT NULL CHECK (type IN ('train', 'food', 'coach', 'facility')),
  title text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  location text NOT NULL,
  helpful_count integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE trains ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE safety_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for demo purposes)
CREATE POLICY "Allow public read access to trains"
  ON trains
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to complaints"
  ON complaints
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to safety_alerts"
  ON safety_alerts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

-- Create policies for public insert access (for demo purposes)
CREATE POLICY "Allow public insert to complaints"
  ON complaints
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public insert to safety_alerts"
  ON safety_alerts
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public insert to reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample trains data
INSERT INTO trains (train_number, train_name, from_station, to_station, departure_time, arrival_time, duration, price, available_seats, rating) VALUES
('12345', 'Rajdhani Express', 'New Delhi', 'Mumbai Central', '16:55', '08:35', '15h 40m', 2500, 45, 4.5),
('12301', 'Howrah Rajdhani', 'New Delhi', 'Howrah', '17:00', '09:55', '16h 55m', 2800, 32, 4.3),
('12951', 'Mumbai Rajdhani', 'New Delhi', 'Mumbai Central', '16:55', '08:35', '15h 40m', 2600, 28, 4.4),
('12423', 'Dibrugarh Rajdhani', 'New Delhi', 'Dibrugarh', '21:35', '07:00', '33h 25m', 3200, 15, 4.2),
('12009', 'Shatabdi Express', 'New Delhi', 'Amritsar', '07:20', '13:25', '6h 05m', 1200, 67, 4.6),
('12002', 'Bhopal Shatabdi', 'New Delhi', 'Bhopal', '06:15', '14:05', '7h 50m', 1400, 52, 4.1),
('22691', 'Rajdhani Express', 'New Delhi', 'Bangalore', '20:30', '05:50', '33h 20m', 3500, 23, 4.3),
('12626', 'Kerala Express', 'New Delhi', 'Thiruvananthapuram', '11:45', '04:15', '40h 30m', 2200, 38, 4.0);

-- Insert sample complaints
INSERT INTO complaints (user_id, type, title, description, location, train_number, status, priority) VALUES
('user_001', 'food', 'Poor quality food served', 'The food served in the pantry car was stale and had a bad smell. Multiple passengers complained about it.', 'Pantry Car - Coach B5', '12345', 'investigating', 'high'),
('user_002', 'facilities', 'Broken air conditioning', 'AC not working in coach A1. Temperature is very high and passengers are uncomfortable.', 'Coach A1', '12301', 'pending', 'medium'),
('user_003', 'theft', 'Mobile phone stolen', 'My mobile phone was stolen while I was sleeping. Suspect it happened around 2 AM.', 'Coach S3, Berth 45', '12951', 'investigating', 'high'),
('user_004', 'harassment', 'Inappropriate behavior by co-passenger', 'A co-passenger was making inappropriate comments and gestures towards female passengers.', 'Coach B2', '12009', 'resolved', 'urgent'),
('user_005', 'other', 'Excessive noise from vendors', 'Vendors are making too much noise and disturbing passengers trying to sleep.', 'Platform 3', '', 'pending', 'low');

-- Insert sample reviews
INSERT INTO reviews (user_id, train_number, type, title, content, rating, location, helpful_count) VALUES
('user_101', '12345', 'train', 'Excellent service and punctuality', 'The Rajdhani Express was on time and the service was exceptional. Clean coaches and courteous staff.', 5, 'New Delhi to Mumbai', 12),
('user_102', '12301', 'food', 'Good food quality', 'The meals served were tasty and fresh. Variety of options available for both vegetarian and non-vegetarian passengers.', 4, 'Howrah Rajdhani', 8),
('user_103', '12951', 'coach', 'Clean and comfortable coaches', 'The AC coaches were well-maintained and clean. Comfortable berths for a good nights sleep.', 4, 'Coach A2', 15),
('user_104', '12009', 'facility', 'WiFi not working properly', 'The promised WiFi service was very slow and kept disconnecting. Needs improvement.', 2, 'Shatabdi Express', 6),
('user_105', '12002', 'train', 'Delayed departure', 'Train was delayed by 45 minutes without proper announcement. Caused inconvenience to connecting passengers.', 3, 'New Delhi Station', 9),
('user_106', '22691', 'food', 'Overpriced meals', 'Food quality is decent but prices are too high compared to the portion size and quality offered.', 3, 'Pantry Car', 4),
('user_107', '12626', 'facility', 'Clean washrooms', 'Washrooms were surprisingly clean throughout the journey. Maintenance staff did a good job.', 4, 'Kerala Express', 11),
('user_108', '12345', 'coach', 'Noisy air conditioning', 'The AC unit in our coach was making loud noises throughout the night. Disturbed sleep for many passengers.', 2, 'Coach B1', 7);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_trains_train_number ON trains(train_number);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
CREATE INDEX IF NOT EXISTS idx_complaints_created_at ON complaints(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_safety_alerts_status ON safety_alerts(status);
CREATE INDEX IF NOT EXISTS idx_safety_alerts_created_at ON safety_alerts(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for complaints table
CREATE TRIGGER update_complaints_updated_at
    BEFORE UPDATE ON complaints
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();