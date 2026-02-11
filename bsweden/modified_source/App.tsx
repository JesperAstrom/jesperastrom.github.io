import React from 'react';
import Header from './components/Header';
import Seo from './components/Seo';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Seo title="Welcome Home" />
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide">
            Just Launched
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900">
            Welcome to your new website.
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            This is a clean, modern boilerplate ready for your next project. 
            Edit <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">App.tsx</code> to get started.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="h-12 px-8 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all flex items-center group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-12 px-8 rounded-full bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Company, Inc.
      </footer>
    </div>
  );
}