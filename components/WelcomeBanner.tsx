import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons';

const WelcomeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const BANNER_KEY = 'arcaneIntegrationBannerDismissed';

  useEffect(() => {
    const bannerDismissed = localStorage.getItem(BANNER_KEY);
    if (bannerDismissed !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(BANNER_KEY, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-arcane-accent to-arcane-cyan text-white p-6 rounded-2xl shadow-lg shadow-arcane-accent/30 mb-16 animate-fade-in">
      <button 
        onClick={handleDismiss} 
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss welcome banner"
      >
        <CloseIcon className="w-6 h-6" />
      </button>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="text-3xl">🚀</div>
        <div>
          <h2 className="text-2xl font-bold">Welcome to the ARCANE Integration Build!</h2>
          <p className="mt-1 text-white/90">
            We've just launched our Dating Module v1, Vendor SaaS hosting, Social Account Linking, and more. Explore the newly integrated features below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;