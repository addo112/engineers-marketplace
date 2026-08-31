# ProEngineer Connect 🔧

**The Professional Engineers Marketplace** — Connect with verified professional engineers for your business projects and contracts.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)

## 🌟 Features

- **Engineer Discovery** — Search and filter engineers by specialty, location, experience, and ratings
- **Professional Profiles** — Detailed engineer profiles with portfolios, certifications, and reviews
- **Dual Dashboards** — Separate dashboards for engineers and customers
- **Inquiry System** — Send project inquiries directly to engineers
- **In-Platform Messaging** — Communicate securely within the platform
- **Reviews & Ratings** — Build trust with verified client feedback
- **12 Engineering Categories** — Civil, Mechanical, Electrical, Software, and more

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- A [Supabase](https://supabase.com) account (free tier works)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd engineers-marketplace
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase/schema.sql`
3. Copy your project URL and anon key from **Settings > API**

### 3. Configure Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout with navbar & footer
│   ├── about/                      # About page
│   ├── how-it-works/               # How it works page
│   ├── auth/
│   │   ├── login/                  # Login page
│   │   ├── register/               # Registration with role selection
│   │   └── callback/               # OAuth callback
│   ├── engineers/
│   │   ├── page.tsx                # Search & browse engineers
│   │   └── [id]/page.tsx           # Engineer profile detail
│   └── dashboard/
│       ├── customer/               # Customer dashboard pages
│       └── engineer/               # Engineer dashboard pages
├── components/
│   └── layout/                     # Navbar, Footer, Sidebar
├── lib/
│   ├── supabase/                   # Supabase client utilities
│   ├── types.ts                    # TypeScript interfaces
│   └── mock-data.ts                # Demo data
└── middleware.ts                   # Auth route protection
```

## 🗄️ Database Schema

The application uses 8 PostgreSQL tables with Row Level Security:

| Table | Purpose |
|-------|---------|
| `profiles` | User profiles (extends Supabase Auth) |
| `engineers` | Engineer professional details |
| `services` | Services offered by engineers |
| `categories` | Engineering disciplines |
| `reviews` | Client reviews and ratings |
| `inquiries` | Project inquiry requests |
| `messages` | In-platform messaging |
| `saved_engineers` | Customer bookmarks |

## 🚢 Deployment to Vercel

### Option 1: Via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Icons**: Lucide React
- **Hosting**: Vercel

## 📄 License

MIT License — feel free to use this for your own projects.

---

Built with ❤️ by ProEngineer Connect
