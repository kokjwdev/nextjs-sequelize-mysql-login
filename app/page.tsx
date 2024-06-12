"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await axios.post('/api/verifyToken', { token });
        if (response.data.valid) {
          setRole(response.data.decoded.role);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">Menu</div>
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      <main className="flex-1">
        <nav className="bg-gray-900 text-white p-4">
          <div className="container mx-auto">Navbar</div>
        </nav>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <p>Welcome to the Home Page! Your role is {role}</p>
        </div>
      </main>
    </div>
  );
}
