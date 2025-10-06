import React, { useState, useEffect } from 'react';
import type { UserProfile as UserProfileType } from '../types';
import { EditIcon, SaveIcon, SettingsIcon, TwitterIcon, GitHubIcon, DiscordIcon } from './icons';

const defaultProfile: UserProfileType = {
  username: 'ArcaneUser',
  bio: 'Exploring the frontiers of the decentralized web. Architecting the future on Solana.',
  avatarUrl: 'https://placehold.co/256x256/7e22ce/ffffff?text=AU&font=lora',
  linkedAccounts: {
    twitter: 'arcane_user',
  },
};

// Helper functions for localStorage
const getUserProfile = (): UserProfileType => {
  if (typeof window === 'undefined') return defaultProfile;
  const savedProfile = localStorage.getItem('arcaneUserProfile');
  const parsed = savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  // Ensure linkedAccounts exists
  if (!parsed.linkedAccounts) {
    parsed.linkedAccounts = {};
  }
  return parsed;
};

const saveUserProfile = (profile: UserProfileType) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('arcaneUserProfile', JSON.stringify(profile));
  }
};

interface UserProfileProps {
    onOpenSettings: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onOpenSettings }) => {
  const [profile, setProfile] = useState<UserProfileType>(defaultProfile);
  const [editData, setEditData] = useState<UserProfileType>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [isGeneratingAvatar, setIsGeneratingAvatar] = useState(false);

  useEffect(() => {
    const loadedProfile = getUserProfile();
    setProfile(loadedProfile);
    setEditData(loadedProfile);
  }, []);

  const handleEdit = () => {
    setEditData(profile); // Reset edit form to current profile
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(editData);
    saveUserProfile(editData);
    setIsEditing(false);
  };

  const handleGenerateAvatar = async () => {
      setIsGeneratingAvatar(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      const randomHash = Math.random().toString(36).substring(2, 8).toUpperCase();
      const newAvatarUrl = `https://placehold.co/256x256/08d9d6/0a091e?text=${randomHash}&font=roboto`;
      setEditData(prev => ({...prev, avatarUrl: newAvatarUrl }));
      setIsGeneratingAvatar(false);
  };
  
  const SocialLink: React.FC<{ platform: 'twitter' | 'github' | 'discord', username?: string }> = ({ platform, username }) => {
      const icons = {
          twitter: <TwitterIcon className="w-5 h-5" />,
          github: <GitHubIcon className="w-5 h-5" />,
          discord: <DiscordIcon className="w-5 h-5" />,
      };
      
      return (
          <div className="flex items-center gap-3 bg-gray-200 dark:bg-arcane-secondary p-2 rounded-lg">
              {icons[platform]}
              {username ? (
                <span className="text-sm font-medium text-gray-900 dark:text-white">{username}</span>
              ) : (
                <span className="text-sm text-gray-500 dark:text-gray-400">Not Connected</span>
              )}
          </div>
      );
  };


  return (
    <div className="p-8 sm:p-12 text-gray-900 dark:text-arcane-text">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white">User Profile</h1>
      </header>
      
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <img 
            src={isEditing ? editData.avatarUrl : profile.avatarUrl} 
            alt="User Avatar" 
            className={`w-32 h-32 rounded-full object-cover ring-4 ring-arcane-accent/50 transition-all duration-300 ${isGeneratingAvatar ? 'opacity-50 animate-pulse' : 'opacity-100'}`}
          />
           {isGeneratingAvatar && <div className="absolute inset-0 flex items-center justify-center"><div className="w-8 h-8 border-4 border-t-transparent border-arcane-cyan rounded-full animate-spin"></div></div>}
        </div>

        {isEditing ? (
          <div className="w-full max-w-lg text-center space-y-4">
            <button 
                onClick={handleGenerateAvatar}
                disabled={isGeneratingAvatar}
                className="bg-arcane-cyan hover:bg-cyan-500 text-arcane-bg font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-wait"
            >
                {isGeneratingAvatar ? 'Generating...' : 'Generate New Avatar'}
            </button>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 dark:text-gray-400 text-left mb-1">Username</label>
              <input
                id="username"
                type="text"
                value={editData.username}
                onChange={(e) => setEditData({ ...editData, username: e.target.value })}
                className="w-full bg-gray-200 dark:bg-arcane-primary border-transparent focus:border-arcane-accent focus:ring-arcane-accent rounded-lg text-sm px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-600 dark:text-gray-400 text-left mb-1">Bio</label>
              <textarea
                id="bio"
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                rows={3}
                className="w-full bg-gray-200 dark:bg-arcane-primary border-transparent focus:border-arcane-accent focus:ring-arcane-accent rounded-lg text-sm px-4 py-2"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 text-left mb-2">Linked Accounts</label>
               <div className="space-y-2">
                 <input
                    type="text"
                    placeholder="Twitter Username"
                    value={editData.linkedAccounts.twitter || ''}
                    onChange={(e) => setEditData({ ...editData, linkedAccounts: { ...editData.linkedAccounts, twitter: e.target.value }})}
                    className="w-full bg-gray-200 dark:bg-arcane-primary border-transparent focus:border-arcane-accent focus:ring-arcane-accent rounded-lg text-sm px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="GitHub Username"
                    value={editData.linkedAccounts.github || ''}
                    onChange={(e) => setEditData({ ...editData, linkedAccounts: { ...editData.linkedAccounts, github: e.target.value }})}
                    className="w-full bg-gray-200 dark:bg-arcane-primary border-transparent focus:border-arcane-accent focus:ring-arcane-accent rounded-lg text-sm px-4 py-2"
                  />
               </div>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <button onClick={handleCancel} className="bg-gray-200 hover:bg-gray-300 dark:bg-arcane-secondary dark:hover:bg-arcane-primary text-gray-800 dark:text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                <SaveIcon className="w-5 h-5" />
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center max-w-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.username}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{profile.bio}</p>
            <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">LINKED ACCOUNTS</h3>
                <div className="flex justify-center gap-4">
                    <SocialLink platform="twitter" username={profile.linkedAccounts.twitter} />
                    <SocialLink platform="github" username={profile.linkedAccounts.github} />
                    <SocialLink platform="discord" username={profile.linkedAccounts.discord} />
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button onClick={handleEdit} className="bg-gray-200 hover:bg-gray-300 dark:bg-arcane-secondary dark:hover:bg-arcane-primary text-gray-800 dark:text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
                  <EditIcon className="w-5 h-5" />
                  Edit Profile
                </button>
                 <button onClick={onOpenSettings} className="bg-gray-200 hover:bg-gray-300 dark:bg-arcane-secondary dark:hover:bg-arcane-primary text-gray-800 dark:text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  Settings
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;