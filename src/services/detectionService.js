import api from '@/lib/axios';

export async function getRecentDetections(siteId) {
  const response = await api.get(`/detections/recent`, { params: { siteId } });
  return response.data;
}