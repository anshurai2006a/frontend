"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/services/authService';
import Button from '@/components/ui/Button';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'worker' });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form.name, form.email, form.password, form.role);
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border rounded-lg">
        <h1 className="text-xl font-bold mb-4">Register</h1>
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-3" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-3" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-3" />
        <select name="role" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-4">
          <option value="worker">Worker</option>
          <option value="admin">Admin</option>
        </select>
        <Button className="w-full">Register</Button>
      </form>
    </div>
  );
}