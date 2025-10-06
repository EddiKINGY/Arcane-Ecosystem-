import React from 'react';
import { DATING_PROFILES } from '../constants';
import Card from './Card';
import { HeartIcon } from './icons';

const DatingModule: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {DATING_PROFILES.map((profile, index) => (
        <Card key={profile.id} className="flex flex-col overflow-hidden animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="relative">
            <img src={profile.imageUrl} alt={profile.name} className="w-full h-80 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full flex items-center gap-1.5">
                <HeartIcon className="w-5 h-5 text-red-400" />
                <span className="font-bold text-sm">{profile.matchScore}%</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h3>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{profile.bio}</p>
            <button className="mt-4 w-full bg-arcane-magenta hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
                Connect
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DatingModule;