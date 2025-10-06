import React from 'react';

const TechPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-gray-200 dark:bg-arcane-primary text-arcane-accent dark:text-arcane-highlight text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
    {children}
  </span>
);

export default TechPill;
