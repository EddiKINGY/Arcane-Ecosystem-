import React from 'react';
import { ECOSYSTEM_FEATURES } from '../constants';
import Card from './Card';
import TechPill from './TechPill';

const ExploreEcosystem: React.FC = () => {
  return (
    <div className="p-8 sm:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white">The ARCANE Ecosystem</h1>
        <p className="text-lg font-serif text-gray-600 dark:text-gray-400 mt-2">A deep dive into the core components of our digital reality.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ECOSYSTEM_FEATURES.map((feature, index) => (
          <Card key={feature.name} isGlow className="flex flex-col animate-slide-up" style={{ animationDelay: `${index * 0.1}s`}}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-200 dark:bg-arcane-primary p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-arcane-highlight" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{feature.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{feature.description}</p>
            
            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
              <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
                {feature.keyFeatures.map(kf => <li key={kf}>{kf}</li>)}
              </ul>

              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Technology Stack:</h4>
              <div className="flex flex-wrap">
                {feature.techStack.map(tech => <TechPill key={tech}>{tech}</TechPill>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExploreEcosystem;
