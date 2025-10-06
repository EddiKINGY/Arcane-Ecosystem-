import React from 'react';
import Dashboard from './components/Dashboard';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-arcane-bg text-gray-900 dark:text-arcane-text font-sans selection:bg-arcane-accent selection:text-white transition-colors duration-300">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent dark:bg-arcane-bg dark:bg-[radial-gradient(#2a205a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <main className="px-4 sm:px-6 lg:px-8">
        <Dashboard />
      </main>
      <AIAssistant />
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>ARCANE Ecosystem &copy; 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;