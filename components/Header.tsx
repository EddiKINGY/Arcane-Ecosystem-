import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';
import { UserIcon, AdminIcon } from './icons';

interface HeaderProps {
    onProfileClick: () => void;
    onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick, onAdminClick }) => {
  const [activeLink, setActiveLink] = useState('Ecosystem');

  const scrollToSection = (id: string) => {
      const section = document.getElementById(id.toLowerCase());
      if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveLink(id);
      }
  };

  return (
    <header className="sticky top-0 z-50 crystalline-card animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">ARCANE</h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeLink === link
                      ? 'text-arcane-accent dark:text-arcane-highlight'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {link}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
               <button
                onClick={onAdminClick}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-arcane-primary"
                aria-label="Open admin panel"
              >
                  <AdminIcon className="w-6 h-6" />
              </button>
              <button
                onClick={onProfileClick}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-arcane-primary"
                aria-label="Open user profile"
              >
                  <UserIcon className="w-6 h-6" />
              </button>
              <button className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
                Launch App
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
