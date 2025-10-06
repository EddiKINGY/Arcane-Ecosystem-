import React from 'react';
import { CLOUD_STATS } from '../constants';
import Card from './Card';
import { AWSIcon, AzureIcon } from './icons';

const ArcaneCloud: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CLOUD_STATS.map((stat, index) => (
          <Card key={stat.name} isGlow className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="inline-flex items-center justify-center bg-gray-200 dark:bg-arcane-primary p-4 rounded-full mb-4">
              <stat.icon className="w-8 h-8 text-arcane-highlight" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{stat.name}</p>
          </Card>
        ))}
      </div>
      
      <Card>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hybrid Connections</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">ARCANE Cloud seamlessly integrates with major cloud providers for enhanced scalability and resilience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="crystalline-card p-4 flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-4">
                    <AWSIcon className="w-10 h-10" />
                    <p className="font-semibold text-gray-900 dark:text-white">Amazon Web Services</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-green-500">Connected</p>
                </div>
            </div>
            <div className="crystalline-card p-4 flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-4">
                    <AzureIcon className="w-10 h-10" />
                    <p className="font-semibold text-gray-900 dark:text-white">Microsoft Azure</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-green-500">Connected</p>
                </div>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default ArcaneCloud;