-- =============================================
-- ProEngineer Connect - Database Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. Profiles Table (extends auth.users)
-- =============================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL CHECK (role IN ('engineer', 'customer')),
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 2. Categories Table
-- =============================================
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  engineer_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, slug, description, icon) VALUES
  ('Civil Engineering', 'civil', 'Infrastructure, structural design, and construction', 'Building2'),
  ('Mechanical Engineering', 'mechanical', 'Machinery, HVAC, and manufacturing systems', 'Cog'),
  ('Electrical Engineering', 'electrical', 'Power systems, circuits, and electrical design', 'Zap'),
  ('Software Engineering', 'software', 'Applications, systems, and software solutions', 'Code'),
  ('Chemical Engineering', 'chemical', 'Process design, materials, and chemical systems', 'FlaskConical'),
  ('Environmental Engineering', 'environmental', 'Sustainability, waste management, and ecology', 'Leaf'),
  ('Biomedical Engineering', 'biomedical', 'Medical devices, prosthetics, and healthcare tech', 'Heart'),
  ('Aerospace Engineering', 'aerospace', 'Aircraft, spacecraft, and aviation systems', 'Plane'),
  ('Industrial Engineering', 'industrial', 'Operations, logistics, and process optimization', 'Factory'),
  ('Petroleum Engineering', 'petroleum', 'Oil & gas extraction and processing', 'Droplets'),
  ('Telecommunications', 'telecom', 'Networks, signals, and communication systems', 'Radio'),
  ('Mining Engineering', 'mining', 'Mineral extraction and resource management', 'Mountain');

-- =============================================
-- 3. Engineers Table
-- =============================================
CREATE TABLE engineers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  title TEXT NOT NULL,
  bio TEXT,
  specializations TEXT[] DEFAULT '{}',
  experience_years INTEGER DEFAULT 0,
  hourly_rate DECIMAL(10,2),
  location TEXT,
  country TEXT,
  certifications TEXT[] DEFAULT '{}',
  portfolio_url TEXT,
  linkedin_url TEXT,
  website_url TEXT,
  availability_status TEXT DEFAULT 'available' CHECK (availability_status IN ('available', 'busy', 'unavailable')),
  is_verified BOOLEAN DEFAULT FALSE,
  rating_average DECIMAL(3,2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  projects_completed INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 4. Services Table
-- =============================================
CREATE TABLE services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  engineer_id UUID REFERENCES engineers(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category_id UUID REFERENCES categories(id),
  price_type TEXT DEFAULT 'negotiable' CHECK (price_type IN ('fixed', 'hourly', 'negotiable')),
  price_min DECIMAL(10,2),
  price_max DECIMAL(10,2),
  delivery_time TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 5. Reviews Table
-- =============================================
CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  engineer_id UUID REFERENCES engineers(id) ON DELETE CASCADE NOT NULL,
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  project_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 6. Inquiries Table
-- =============================================
CREATE TABLE inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  engineer_id UUID REFERENCES engineers(id) ON DELETE CASCADE NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  project_type TEXT,
  budget_range TEXT,
  timeline TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 7. Messages Table
-- =============================================
CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  sender_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  receiver_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  inquiry_id UUID REFERENCES inquiries(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 8. Saved Engineers Table
-- =============================================
CREATE TABLE saved_engineers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  engineer_id UUID REFERENCES engineers(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(customer_id, engineer_id)
);

-- =============================================
-- Indexes for performance
-- =============================================
CREATE INDEX idx_engineers_profile_id ON engineers(profile_id);
CREATE INDEX idx_engineers_availability ON engineers(availability_status);
CREATE INDEX idx_engineers_rating ON engineers(rating_average DESC);
CREATE INDEX idx_engineers_location ON engineers(location);
CREATE INDEX idx_services_engineer_id ON services(engineer_id);
CREATE INDEX idx_services_category_id ON services(category_id);
CREATE INDEX idx_reviews_engineer_id ON reviews(engineer_id);
CREATE INDEX idx_reviews_customer_id ON reviews(customer_id);
CREATE INDEX idx_inquiries_customer_id ON inquiries(customer_id);
CREATE INDEX idx_inquiries_engineer_id ON inquiries(engineer_id);
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_receiver_id ON messages(receiver_id);
CREATE INDEX idx_messages_inquiry_id ON messages(inquiry_id);
CREATE INDEX idx_saved_engineers_customer_id ON saved_engineers(customer_id);

-- =============================================
-- Row Level Security (RLS) Policies
-- =============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE engineers ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_engineers ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all, update own
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Engineers: Public read, own write
CREATE POLICY "Engineers are viewable by everyone" ON engineers FOR SELECT USING (true);
CREATE POLICY "Engineers can update own record" ON engineers FOR UPDATE USING (
  profile_id = auth.uid()
);
CREATE POLICY "Engineers can insert own record" ON engineers FOR INSERT WITH CHECK (
  profile_id = auth.uid()
);

-- Services: Public read, engineer own write
CREATE POLICY "Services are viewable by everyone" ON services FOR SELECT USING (true);
CREATE POLICY "Engineers can manage own services" ON services FOR INSERT WITH CHECK (
  engineer_id IN (SELECT id FROM engineers WHERE profile_id = auth.uid())
);
CREATE POLICY "Engineers can update own services" ON services FOR UPDATE USING (
  engineer_id IN (SELECT id FROM engineers WHERE profile_id = auth.uid())
);
CREATE POLICY "Engineers can delete own services" ON services FOR DELETE USING (
  engineer_id IN (SELECT id FROM engineers WHERE profile_id = auth.uid())
);

-- Categories: Public read
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);

-- Reviews: Public read, customers can create
CREATE POLICY "Reviews are viewable by everyone" ON reviews FOR SELECT USING (true);
CREATE POLICY "Customers can create reviews" ON reviews FOR INSERT WITH CHECK (
  auth.uid() = customer_id
);

-- Inquiries: Parties can read own, customers can create
CREATE POLICY "Users can view own inquiries" ON inquiries FOR SELECT USING (
  auth.uid() = customer_id OR 
  auth.uid() IN (SELECT profile_id FROM engineers WHERE id = engineer_id)
);
CREATE POLICY "Customers can create inquiries" ON inquiries FOR INSERT WITH CHECK (
  auth.uid() = customer_id
);
CREATE POLICY "Parties can update inquiry status" ON inquiries FOR UPDATE USING (
  auth.uid() = customer_id OR 
  auth.uid() IN (SELECT profile_id FROM engineers WHERE id = engineer_id)
);

-- Messages: Only sender and receiver can see
CREATE POLICY "Users can view own messages" ON messages FOR SELECT USING (
  auth.uid() = sender_id OR auth.uid() = receiver_id
);
CREATE POLICY "Users can send messages" ON messages FOR INSERT WITH CHECK (
  auth.uid() = sender_id
);
CREATE POLICY "Receiver can mark messages as read" ON messages FOR UPDATE USING (
  auth.uid() = receiver_id
);

-- Saved Engineers: Own read/write
CREATE POLICY "Users can view own saved engineers" ON saved_engineers FOR SELECT USING (
  auth.uid() = customer_id
);
CREATE POLICY "Users can save engineers" ON saved_engineers FOR INSERT WITH CHECK (
  auth.uid() = customer_id
);
CREATE POLICY "Users can unsave engineers" ON saved_engineers FOR DELETE USING (
  auth.uid() = customer_id
);

-- =============================================
-- Functions & Triggers
-- =============================================

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Auto-update rating average when new review is added
CREATE OR REPLACE FUNCTION update_engineer_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE engineers
  SET 
    rating_average = (SELECT AVG(rating) FROM reviews WHERE engineer_id = NEW.engineer_id),
    rating_count = (SELECT COUNT(*) FROM reviews WHERE engineer_id = NEW.engineer_id)
  WHERE id = NEW.engineer_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_review_created
  AFTER INSERT ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_engineer_rating();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_engineers_updated_at
  BEFORE UPDATE ON engineers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
