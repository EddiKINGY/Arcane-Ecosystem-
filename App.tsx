
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-arcane-bg text-arcane-text font-sans selection:bg-arcane-accent selection:text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-arcane-bg bg-[radial-gradient(#2a205a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <Dashboard />
      </main>
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>ARCANE Ecosystem &copy; 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
