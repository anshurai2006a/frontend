import api from '@/lib/axios';

export async function getSafetyStats(siteId) {
  const response = await api.get('/analytics/safety', { params: { siteId } });
  return response.data;
}

export async function getIncidentTimeline(siteId) {
  const response = await api.get('/analytics/timeline', { params: { siteId } });
  return response.data;
}