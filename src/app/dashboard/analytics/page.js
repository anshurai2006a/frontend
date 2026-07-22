"use client";
import { useEffect, useState } from 'react';
import { getSafetyStats } from '@/services/analyticsService';
import SafetyChart from '@/components/dashboard/SafetyChart';

export default function AnalyticsPage() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getSafetyStats('site-001').then((data) => setChartData(data.history || []));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Safety Analytics</h1>
      <SafetyChart data={chartData} />
    </div>
  );
}