"use client";
import { useEffect, useState } from 'react';
import { getIncidentTimeline } from '@/services/analyticsService';
import IncidentTable from '@/components/dashboard/IncidentTable';

export default function TimelinePage() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getIncidentTimeline('site-001').then(setIncidents);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Incident Timeline</h1>
      <IncidentTable incidents={incidents} />
    </div>
  );
}