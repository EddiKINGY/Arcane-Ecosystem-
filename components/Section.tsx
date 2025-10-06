
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, icon }) => {
  return (
    <section id={id} className="py-20 animate-fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-arcane-primary p-3 rounded-full mb-4">
            {icon}
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
