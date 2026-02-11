import React from 'react';

export default function Header() {
  return (
    <header className="py-6 px-6 border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Logo</div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}