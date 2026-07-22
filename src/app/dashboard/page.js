"use client";
import { useEffect, useState } from 'react';
import { getSafetyStats } from '@/services/analyticsService';
import StatsCard from '@/components/dashboard/StatsCard';
import Navbar from '@/components/ui/Navbar';
import Loader from '@/components/ui/Loader';

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getSafetyStats('site-001').then(setStats);
  }, []);

  if (!stats) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 p-6">
        <StatsCard label="Total Incidents" value={stats.totalIncidents} color="red" />
        <StatsCard label="PPE Violations" value={stats.ppeViolations} color="yellow" />
        <StatsCard label="Active Workers" value={stats.activeWorkers} color="blue" />
      </div>
    </div>
  );
}