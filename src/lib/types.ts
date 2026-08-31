// Types for ProEngineer Connect

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'engineer' | 'customer';
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface Engineer {
  id: string;
  profile_id: string;
  title: string;
  bio: string;
  specializations: string[];
  experience_years: number;
  hourly_rate?: number;
  location: string;
  country: string;
  certifications: string[];
  portfolio_url?: string;
  linkedin_url?: string;
  website_url?: string;
  availability_status: 'available' | 'busy' | 'unavailable';
  is_verified: boolean;
  rating_average: number;
  rating_count: number;
  projects_completed: number;
  created_at: string;
  updated_at: string;
  // Joined fields
  profile?: Profile;
}

export interface Service {
  id: string;
  engineer_id: string;
  title: string;
  description: string;
  category_id: string;
  price_type: 'fixed' | 'hourly' | 'negotiable';
  price_min?: number;
  price_max?: number;
  delivery_time?: string;
  is_active: boolean;
  created_at: string;
  // Joined fields
  category?: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  engineer_count: number;
}

export interface Review {
  id: string;
  engineer_id: string;
  customer_id: string;
  rating: number;
  comment: string;
  project_type: string;
  created_at: string;
  // Joined fields
  customer?: Profile;
}

export interface Inquiry {
  id: string;
  customer_id: string;
  engineer_id: string;
  subject: string;
  message: string;
  project_type: string;
  budget_range?: string;
  timeline?: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  created_at: string;
  updated_at: string;
  // Joined fields
  customer?: Profile;
  engineer?: Engineer;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  inquiry_id?: string;
  content: string;
  is_read: boolean;
  created_at: string;
  // Joined fields
  sender?: Profile;
  receiver?: Profile;
}

export interface SavedEngineer {
  id: string;
  customer_id: string;
  engineer_id: string;
  created_at: string;
  // Joined fields
  engineer?: Engineer;
}

// Search & Filter types
export interface EngineerFilters {
  query?: string;
  category?: string;
  location?: string;
  min_rate?: number;
  max_rate?: number;
  min_rating?: number;
  experience_min?: number;
  availability?: string;
  sort_by?: 'rating' | 'experience' | 'price_low' | 'price_high' | 'newest';
  page?: number;
  per_page?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// Engineering categories constant
export const ENGINEERING_CATEGORIES = [
  { name: 'Civil Engineering', slug: 'civil', icon: 'Building2', description: 'Infrastructure, structural design, and construction' },
  { name: 'Mechanical Engineering', slug: 'mechanical', icon: 'Cog', description: 'Machinery, HVAC, and manufacturing systems' },
  { name: 'Electrical Engineering', slug: 'electrical', icon: 'Zap', description: 'Power systems, circuits, and electrical design' },
  { name: 'Software Engineering', slug: 'software', icon: 'Code', description: 'Applications, systems, and software solutions' },
  { name: 'Chemical Engineering', slug: 'chemical', icon: 'FlaskConical', description: 'Process design, materials, and chemical systems' },
  { name: 'Environmental Engineering', slug: 'environmental', icon: 'Leaf', description: 'Sustainability, waste management, and ecology' },
  { name: 'Biomedical Engineering', slug: 'biomedical', icon: 'Heart', description: 'Medical devices, prosthetics, and healthcare tech' },
  { name: 'Aerospace Engineering', slug: 'aerospace', icon: 'Plane', description: 'Aircraft, spacecraft, and aviation systems' },
  { name: 'Industrial Engineering', slug: 'industrial', icon: 'Factory', description: 'Operations, logistics, and process optimization' },
  { name: 'Petroleum Engineering', slug: 'petroleum', icon: 'Droplets', description: 'Oil & gas extraction and processing' },
  { name: 'Telecommunications', slug: 'telecom', icon: 'Radio', description: 'Networks, signals, and communication systems' },
  { name: 'Mining Engineering', slug: 'mining', icon: 'Mountain', description: 'Mineral extraction and resource management' },
] as const;
