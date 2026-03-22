# F-OneByOne - Modern Formula 1 Data Dashboard

F-OneByOne is a high-performance, real-time Formula 1 data visualization web application built with the modern Next.js App Router. It allows users to dive deep into historical and current Formula 1 data, track constructor and driver championships, and analyze lap-by-lap telemetry and pit stop strategies for any race in recent history.

## 🚀 Features

*   **Dynamic Season Navigation**: A global Season Selector that instantly fetches and updates all dashboard metrics, charts, and tables for any F1 season from 2000 to the present.
*   **Deep Dive Race Analysis**: 
    *   **Lap-by-Lap Position Tracker**: Interactive Recharts visualizations plotting driver positional changes throughout the grid across every lap.
    *   **Pit Stop Strategy**: Comprehensive data tables logging pit stop duration, lap timing, and time of day for precise race strategy analysis.
*   **Championship Standings**: Dedicated pages for parsing both Driver and Constructor points across the selected season.
*   **Aggressive BFF Auto-Pagination**: The Next.js backend proxy routes (`/api/f1/*`) implement robust algorithmic recursion to automatically paginate and condense the deeply nested external Ergast API requests, bypassing default rate limits and preventing data fragmentation.
*   **Authentication & Personalization**: Secure user authentication handled by Clerk, equipped with Prisma and Supabase to persist user preferences.
*   **Stunning UI/UX**: Built using Tailwind CSS v4 and `shadcn/ui` components. Employs curated F1 typography ("Racing Sans One" & "Titillium Web") for an immersive, premium motorsport feel.

## 🛠️ Tech Stack

*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4
*   **Components**: shadcn/ui, Radix UI
*   **Data Visualization**: Recharts
*   **Authentication**: Clerk
*   **Database**: Supabase (PostgreSQL)
*   **ORM**: Prisma
*   **External Data Source**: Jolpi Ergast F1 API (`api.jolpi.ca`)

## 📁 Code Structure

The project strictly follows the Next.js App Router architecture:

```text
src/
├── app/                  # Next.js App Router Core
│   ├── api/f1/           # Backend-for-Frontend (BFF) proxy routes for Ergast
│   │   ├── laps/         # API fetching telemetry lap data (Auto-Paginated)
│   │   ├── pitstops/     # API fetching pitstop timings (Auto-Paginated)
│   │   ├── races/        # API fetching season calendars
│   │   ├── results/      # API fetching race results and podiums (Auto-Paginated)
│   │   └── standings/    # API fetching constructor and driver standings
│   ├── dashboard/        # Protected User Dashboard UI
│   │   ├── calendar/     # Visual race schedule & Grand Prix navigation
│   │   │   └── [round]/  # Dynamic deep-dive route for specific Race telemetry
│   │   ├── race-analysis/# Standalone telemetry UI with Race Selector dropdown
│   │   └── standings/    # Dedicated UI for World Championship Rankings
│   ├── sign-in/          # Clerk Authentication Route
│   ├── sign-up/          # Clerk Authentication Route
│   ├── globals.css       # Tailwind entry and global CSS variables
│   └── layout.tsx        # Root layout injecting ClerkProvider & Fonts
├── components/           # Reusable UI Architecture
│   ├── dashboard/        # F1-specific data components (Charts, Tables, Selectors)
│   │   ├── ConstructorPointsChart.tsx
│   │   ├── LapPositionChart.tsx
│   │   ├── RecentRacesTable.tsx
│   │   ├── RaceSelector.tsx
│   │   └── SeasonSelector.tsx
│   └── ui/               # shadcn/ui primitive components (Cards, Tables, etc.)
├── lib/                  # Utilities
│   └── prisma.ts         # Prisma global client singleton
```

## ⚙️ Getting Started

### Prerequisites

You need Node.js installed and access to your own Supabase database and Clerk dashboard to inject environment variables.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd f1-pulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add the following keys:
   ```env
   # Supabase / Prisma
   DATABASE_URL="postgres://..."
   DIRECT_URL="postgres://..."

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
   ```

4. Push the Database Schema:
   ```bash
   npx prisma db push
   ```

5. Run the Development Server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏁 External API

This project utilizes the [Jolpi Ergast F1 API](https://api.jolpi.ca/ergast/f1/). A massive thank you to their reliable and fast proxy of the historical Ergast JSON endpoints.
