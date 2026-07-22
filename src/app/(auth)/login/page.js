"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/authService';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await loginUser(email, password);
    login(data.user);
    router.push(data.user.role === 'admin' ? '/dashboard' : '/live');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-6 border rounded-lg">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
        />
        <input
          type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <Button className="w-full">Login</Button>
      </form>
    </div>
  );
}