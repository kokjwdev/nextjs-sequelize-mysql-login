"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Input from '@/components/form/Input';
import Button from '@/components/form/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 1000);
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div>
            <Button onClick={handleSubmit} label="Sign in" />
          </div>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}
