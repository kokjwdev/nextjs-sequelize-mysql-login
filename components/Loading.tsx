import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="loader">
        <div className="spinner"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
