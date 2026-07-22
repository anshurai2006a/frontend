import api from '@/lib/axios';

export async function loginUser(email, password) {
  // TEMP MOCK — remove once backend exists
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Fake role logic: if email contains "admin", log in as admin
  const role = email.includes('admin') ? 'admin' : 'worker';

  return {
    user: {
      name: email.split('@')[0],
      email,
      role,
    },
  };

  // Real version — uncomment once backend is ready:
  // const response = await api.post('/auth/login', { email, password });
  // return response.data;
}

export async function registerUser(name, email, password, role) {
  // TEMP MOCK
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { success: true, message: 'Demo registration successful' };

  // Real version:
  // const response = await api.post('/auth/register', { name, email, password, role });
  // return response.data;
}