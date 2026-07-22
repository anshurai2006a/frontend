import api from '@/lib/axios';

export async function askConstructionQuestion(question, siteId) {
  // TEMP MOCK — remove this block once FastAPI backend is ready
  await new Promise((resolve) => setTimeout(resolve, 600)); // simulate network delay
  return `(Demo) Based on the blueprint for site "${siteId}", here's a placeholder answer to: "${question}". This will be replaced by real RAG results once the backend is connected.`;

  // Real version — uncomment once backend exists:
  // const response = await api.post('/rag/query', { question, siteId });
  // return response.data.answer;
}