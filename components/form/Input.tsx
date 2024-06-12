import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

export default function Input({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = true,
  className = '',
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{name}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
