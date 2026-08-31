import type { Engineer, Profile, Review, Service, Category, Inquiry } from './types';

// Mock profiles
export const mockProfiles: Profile[] = [
  { id: '1', email: 'kwame.asante@email.com', full_name: 'Kwame Asante', role: 'engineer', phone: '+233 24 123 4567', avatar_url: '', created_at: '2024-01-15', updated_at: '2024-06-01' },
  { id: '2', email: 'ama.mensah@email.com', full_name: 'Ama Mensah', role: 'engineer', phone: '+233 20 987 6543', avatar_url: '', created_at: '2024-02-20', updated_at: '2024-06-10' },
  { id: '3', email: 'kofi.boateng@email.com', full_name: 'Kofi Boateng', role: 'engineer', phone: '+233 27 555 1234', avatar_url: '', created_at: '2024-03-10', updated_at: '2024-07-15' },
  { id: '4', email: 'abena.owusu@email.com', full_name: 'Abena Owusu', role: 'engineer', phone: '+233 26 777 8901', avatar_url: '', created_at: '2024-01-25', updated_at: '2024-05-20' },
  { id: '5', email: 'yaw.darkwa@email.com', full_name: 'Yaw Darkwa', role: 'engineer', phone: '+233 24 333 4444', avatar_url: '', created_at: '2024-04-05', updated_at: '2024-08-01' },
  { id: '6', email: 'efua.amoah@email.com', full_name: 'Efua Amoah', role: 'engineer', phone: '+233 20 666 7777', avatar_url: '', created_at: '2024-02-14', updated_at: '2024-07-22' },
  { id: '7', email: 'nana.osei@email.com', full_name: 'Nana Osei', role: 'engineer', phone: '+233 27 888 9999', avatar_url: '', created_at: '2024-03-20', updated_at: '2024-08-10' },
  { id: '8', email: 'akua.frimpong@email.com', full_name: 'Akua Frimpong', role: 'engineer', phone: '+233 26 111 2222', avatar_url: '', created_at: '2024-05-01', updated_at: '2024-08-15' },
];

// Mock engineers
export const mockEngineers: (Engineer & { profile: Profile })[] = [
  {
    id: 'eng-1', profile_id: '1', title: 'Senior Civil Engineer', bio: 'Experienced civil engineer with 15+ years in structural design, infrastructure development, and project management across West Africa. Specialized in sustainable construction and earthquake-resistant structures. Led over 50 major projects including bridges, highways, and commercial buildings.',
    specializations: ['Structural Design', 'Infrastructure', 'Project Management', 'Sustainable Construction'],
    experience_years: 15, hourly_rate: 120, location: 'Kumasi', country: 'Ghana',
    certifications: ['PE License', 'PMP Certified', 'LEED AP'],
    portfolio_url: 'https://portfolio.example.com', linkedin_url: 'https://linkedin.com', website_url: '',
    availability_status: 'available', is_verified: true, rating_average: 4.9, rating_count: 47, projects_completed: 52,
    created_at: '2024-01-15', updated_at: '2024-06-01',
    profile: { id: '1', email: 'kwame.asante@email.com', full_name: 'Kwame Asante', role: 'engineer', avatar_url: '', created_at: '2024-01-15', updated_at: '2024-06-01' },
  },
  {
    id: 'eng-2', profile_id: '2', title: 'Electrical Power Systems Engineer', bio: 'Specialist in power systems design, renewable energy integration, and smart grid technology. Passionate about bringing reliable electricity to underserved communities. Expert in solar, wind, and hybrid power solutions for both commercial and residential applications.',
    specializations: ['Power Systems', 'Renewable Energy', 'Smart Grid', 'Solar Design'],
    experience_years: 10, hourly_rate: 95, location: 'Accra', country: 'Ghana',
    certifications: ['PE License', 'Certified Energy Manager', 'Solar PV Designer'],
    portfolio_url: '', linkedin_url: 'https://linkedin.com', website_url: 'https://amamensah.eng',
    availability_status: 'available', is_verified: true, rating_average: 4.8, rating_count: 35, projects_completed: 38,
    created_at: '2024-02-20', updated_at: '2024-06-10',
    profile: { id: '2', email: 'ama.mensah@email.com', full_name: 'Ama Mensah', role: 'engineer', avatar_url: '', created_at: '2024-02-20', updated_at: '2024-06-10' },
  },
  {
    id: 'eng-3', profile_id: '3', title: 'Mechanical Design Engineer', bio: 'Mechanical engineer specializing in CAD/CAM design, manufacturing processes, and HVAC systems. Proficient in SolidWorks, AutoCAD, and ANSYS. Experienced in both heavy industrial and consumer product design with a focus on efficiency and cost optimization.',
    specializations: ['CAD/CAM Design', 'HVAC Systems', 'Manufacturing', 'Product Design'],
    experience_years: 8, hourly_rate: 85, location: 'Takoradi', country: 'Ghana',
    certifications: ['CSWE (SolidWorks Expert)', 'Six Sigma Green Belt'],
    portfolio_url: '', linkedin_url: '', website_url: '',
    availability_status: 'busy', is_verified: true, rating_average: 4.7, rating_count: 28, projects_completed: 31,
    created_at: '2024-03-10', updated_at: '2024-07-15',
    profile: { id: '3', email: 'kofi.boateng@email.com', full_name: 'Kofi Boateng', role: 'engineer', avatar_url: '', created_at: '2024-03-10', updated_at: '2024-07-15' },
  },
  {
    id: 'eng-4', profile_id: '4', title: 'Environmental & Water Resources Engineer', bio: 'Dedicated environmental engineer with expertise in water treatment, waste management, and environmental impact assessment. Committed to sustainable development and clean water access. Has designed water systems serving over 100,000 people across Ghana and Nigeria.',
    specializations: ['Water Treatment', 'Waste Management', 'Environmental Impact', 'Sustainability'],
    experience_years: 12, hourly_rate: 110, location: 'Accra', country: 'Ghana',
    certifications: ['PE License', 'ISO 14001 Auditor', 'ENVISION SP'],
    portfolio_url: 'https://portfolio.example.com', linkedin_url: 'https://linkedin.com', website_url: '',
    availability_status: 'available', is_verified: true, rating_average: 4.9, rating_count: 41, projects_completed: 45,
    created_at: '2024-01-25', updated_at: '2024-05-20',
    profile: { id: '4', email: 'abena.owusu@email.com', full_name: 'Abena Owusu', role: 'engineer', avatar_url: '', created_at: '2024-01-25', updated_at: '2024-05-20' },
  },
  {
    id: 'eng-5', profile_id: '5', title: 'Software & Systems Engineer', bio: 'Full-stack software engineer with deep expertise in cloud architecture, embedded systems, and IoT solutions. Built scalable platforms serving millions of users. Experienced in AI/ML integration for industrial applications and automation systems.',
    specializations: ['Cloud Architecture', 'IoT Solutions', 'Embedded Systems', 'AI/ML Integration'],
    experience_years: 9, hourly_rate: 130, location: 'Kumasi', country: 'Ghana',
    certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Cisco CCNA'],
    portfolio_url: '', linkedin_url: 'https://linkedin.com', website_url: 'https://yawdarkwa.dev',
    availability_status: 'available', is_verified: true, rating_average: 4.8, rating_count: 33, projects_completed: 40,
    created_at: '2024-04-05', updated_at: '2024-08-01',
    profile: { id: '5', email: 'yaw.darkwa@email.com', full_name: 'Yaw Darkwa', role: 'engineer', avatar_url: '', created_at: '2024-04-05', updated_at: '2024-08-01' },
  },
  {
    id: 'eng-6', profile_id: '6', title: 'Chemical Process Engineer', bio: 'Chemical engineer with extensive experience in process design, petrochemicals, and food processing plants. Expert in process simulation using Aspen Plus and HYSYS. Focused on process optimization, safety, and environmental compliance.',
    specializations: ['Process Design', 'Petrochemicals', 'Food Processing', 'Process Simulation'],
    experience_years: 11, hourly_rate: 100, location: 'Tema', country: 'Ghana',
    certifications: ['PE License', 'Process Safety Management', 'HAZOP Leader'],
    portfolio_url: '', linkedin_url: 'https://linkedin.com', website_url: '',
    availability_status: 'available', is_verified: false, rating_average: 4.6, rating_count: 22, projects_completed: 25,
    created_at: '2024-02-14', updated_at: '2024-07-22',
    profile: { id: '6', email: 'efua.amoah@email.com', full_name: 'Efua Amoah', role: 'engineer', avatar_url: '', created_at: '2024-02-14', updated_at: '2024-07-22' },
  },
  {
    id: 'eng-7', profile_id: '7', title: 'Telecommunications Engineer', bio: 'Telecom engineer specializing in network design, fiber optics, and 5G infrastructure deployment. Has designed and deployed networks across 5 countries in Africa. Expert in RF planning, network optimization, and satellite communications.',
    specializations: ['Network Design', 'Fiber Optics', '5G Infrastructure', 'RF Planning'],
    experience_years: 13, hourly_rate: 115, location: 'Accra', country: 'Ghana',
    certifications: ['CCNP', 'Certified Wireless Network Expert', 'Nokia SRC'],
    portfolio_url: '', linkedin_url: 'https://linkedin.com', website_url: '',
    availability_status: 'busy', is_verified: true, rating_average: 4.7, rating_count: 30, projects_completed: 35,
    created_at: '2024-03-20', updated_at: '2024-08-10',
    profile: { id: '7', email: 'nana.osei@email.com', full_name: 'Nana Osei', role: 'engineer', avatar_url: '', created_at: '2024-03-20', updated_at: '2024-08-10' },
  },
  {
    id: 'eng-8', profile_id: '8', title: 'Biomedical Equipment Engineer', bio: 'Biomedical engineer focused on medical device design, hospital equipment maintenance, and healthcare technology solutions. Works closely with hospitals to ensure critical equipment reliability and compliance with international safety standards.',
    specializations: ['Medical Devices', 'Hospital Equipment', 'Healthcare Tech', 'Regulatory Compliance'],
    experience_years: 7, hourly_rate: 90, location: 'Kumasi', country: 'Ghana',
    certifications: ['CBET (Certified Biomedical Equipment Technician)', 'ISO 13485'],
    portfolio_url: '', linkedin_url: '', website_url: '',
    availability_status: 'available', is_verified: true, rating_average: 4.5, rating_count: 18, projects_completed: 20,
    created_at: '2024-05-01', updated_at: '2024-08-15',
    profile: { id: '8', email: 'akua.frimpong@email.com', full_name: 'Akua Frimpong', role: 'engineer', avatar_url: '', created_at: '2024-05-01', updated_at: '2024-08-15' },
  },
];

// Mock reviews
export const mockReviews: (Review & { customer: Profile })[] = [
  { id: 'rev-1', engineer_id: 'eng-1', customer_id: 'c1', rating: 5, comment: 'Kwame delivered exceptional structural design work for our commercial building project. His attention to detail and knowledge of local building codes was invaluable. Highly recommended!', project_type: 'Commercial Building', created_at: '2024-05-15', customer: { id: 'c1', email: 'john@company.com', full_name: 'John Addo', role: 'customer', created_at: '2024-01-01', updated_at: '2024-01-01' } },
  { id: 'rev-2', engineer_id: 'eng-1', customer_id: 'c2', rating: 5, comment: 'Outstanding project management skills. Kwame completed our bridge renovation project 2 weeks ahead of schedule and under budget. A true professional.', project_type: 'Bridge Renovation', created_at: '2024-06-20', customer: { id: 'c2', email: 'sarah@corp.com', full_name: 'Sarah Tetteh', role: 'customer', created_at: '2024-02-01', updated_at: '2024-02-01' } },
  { id: 'rev-3', engineer_id: 'eng-2', customer_id: 'c3', rating: 5, comment: 'Ama designed an excellent solar power system for our factory. Energy costs dropped by 60%. Her expertise in renewable energy is remarkable.', project_type: 'Solar Installation', created_at: '2024-04-10', customer: { id: 'c3', email: 'mike@industry.com', full_name: 'Michael Ansah', role: 'customer', created_at: '2024-01-15', updated_at: '2024-01-15' } },
  { id: 'rev-4', engineer_id: 'eng-4', customer_id: 'c4', rating: 5, comment: 'Abena\'s water treatment plant design has transformed our community. Clean water is now accessible to over 5,000 residents. Her dedication to sustainable solutions is inspiring.', project_type: 'Water Treatment Plant', created_at: '2024-07-05', customer: { id: 'c4', email: 'chief@community.org', full_name: 'Nana Agyei', role: 'customer', created_at: '2024-03-01', updated_at: '2024-03-01' } },
  { id: 'rev-5', engineer_id: 'eng-5', customer_id: 'c5', rating: 4, comment: 'Yaw built a robust IoT monitoring system for our agricultural operations. The system works flawlessly and has improved our crop yields significantly.', project_type: 'IoT Agricultural System', created_at: '2024-06-30', customer: { id: 'c5', email: 'farm@agritech.com', full_name: 'Kwesi Appiah', role: 'customer', created_at: '2024-02-15', updated_at: '2024-02-15' } },
];

// Mock categories with counts
export const mockCategories: Category[] = [
  { id: 'cat-1', name: 'Civil Engineering', slug: 'civil', description: 'Infrastructure, structural design, and construction', icon: 'Building2', engineer_count: 45 },
  { id: 'cat-2', name: 'Mechanical Engineering', slug: 'mechanical', description: 'Machinery, HVAC, and manufacturing systems', icon: 'Cog', engineer_count: 38 },
  { id: 'cat-3', name: 'Electrical Engineering', slug: 'electrical', description: 'Power systems, circuits, and electrical design', icon: 'Zap', engineer_count: 52 },
  { id: 'cat-4', name: 'Software Engineering', slug: 'software', description: 'Applications, systems, and software solutions', icon: 'Code', engineer_count: 67 },
  { id: 'cat-5', name: 'Chemical Engineering', slug: 'chemical', description: 'Process design, materials, and chemical systems', icon: 'FlaskConical', engineer_count: 23 },
  { id: 'cat-6', name: 'Environmental Engineering', slug: 'environmental', description: 'Sustainability, waste management, and ecology', icon: 'Leaf', engineer_count: 31 },
  { id: 'cat-7', name: 'Biomedical Engineering', slug: 'biomedical', description: 'Medical devices, prosthetics, and healthcare tech', icon: 'Heart', engineer_count: 19 },
  { id: 'cat-8', name: 'Aerospace Engineering', slug: 'aerospace', description: 'Aircraft, spacecraft, and aviation systems', icon: 'Plane', engineer_count: 12 },
  { id: 'cat-9', name: 'Industrial Engineering', slug: 'industrial', description: 'Operations, logistics, and process optimization', icon: 'Factory', engineer_count: 28 },
  { id: 'cat-10', name: 'Petroleum Engineering', slug: 'petroleum', description: 'Oil & gas extraction and processing', icon: 'Droplets', engineer_count: 15 },
  { id: 'cat-11', name: 'Telecommunications', slug: 'telecom', description: 'Networks, signals, and communication systems', icon: 'Radio', engineer_count: 34 },
  { id: 'cat-12', name: 'Mining Engineering', slug: 'mining', description: 'Mineral extraction and resource management', icon: 'Mountain', engineer_count: 20 },
];

// Mock services
export const mockServices: Service[] = [
  { id: 'svc-1', engineer_id: 'eng-1', title: 'Structural Analysis & Design', description: 'Complete structural analysis and design for buildings up to 20 stories', category_id: 'cat-1', price_type: 'fixed', price_min: 5000, price_max: 25000, delivery_time: '4-8 weeks', is_active: true, created_at: '2024-01-20' },
  { id: 'svc-2', engineer_id: 'eng-1', title: 'Construction Project Management', description: 'End-to-end project management for civil construction projects', category_id: 'cat-1', price_type: 'hourly', price_min: 120, price_max: 120, delivery_time: 'Ongoing', is_active: true, created_at: '2024-01-20' },
  { id: 'svc-3', engineer_id: 'eng-2', title: 'Solar Power System Design', description: 'Complete solar PV system design for residential and commercial properties', category_id: 'cat-3', price_type: 'fixed', price_min: 3000, price_max: 15000, delivery_time: '2-4 weeks', is_active: true, created_at: '2024-02-25' },
  { id: 'svc-4', engineer_id: 'eng-2', title: 'Electrical Power Audit', description: 'Comprehensive power audit and optimization recommendations', category_id: 'cat-3', price_type: 'fixed', price_min: 2000, price_max: 5000, delivery_time: '1-2 weeks', is_active: true, created_at: '2024-02-25' },
  { id: 'svc-5', engineer_id: 'eng-5', title: 'Cloud Architecture Design', description: 'Scalable cloud infrastructure design and implementation', category_id: 'cat-4', price_type: 'hourly', price_min: 130, price_max: 130, delivery_time: 'Varies', is_active: true, created_at: '2024-04-10' },
];

// Mock inquiries
export const mockInquiries: Inquiry[] = [
  { id: 'inq-1', customer_id: 'c1', engineer_id: 'eng-1', subject: 'Office Building Structural Design', message: 'We need structural design services for a 10-story office building in Kumasi CBD.', project_type: 'Commercial Building', budget_range: '$20,000 - $50,000', timeline: '3 months', status: 'pending', created_at: '2024-08-01', updated_at: '2024-08-01' },
  { id: 'inq-2', customer_id: 'c3', engineer_id: 'eng-2', subject: 'Factory Solar Installation', message: 'Looking for a complete solar solution for our manufacturing plant. Current energy costs are unsustainable.', project_type: 'Solar Installation', budget_range: '$30,000 - $80,000', timeline: '2 months', status: 'accepted', created_at: '2024-07-15', updated_at: '2024-07-20' },
  { id: 'inq-3', customer_id: 'c4', engineer_id: 'eng-4', subject: 'Community Water Treatment', message: 'Our community needs a reliable water treatment system. Population of approximately 5,000 people.', project_type: 'Water Treatment', budget_range: '$50,000 - $100,000', timeline: '6 months', status: 'completed', created_at: '2024-03-01', updated_at: '2024-07-01' },
];
