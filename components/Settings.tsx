import React, { useState, useEffect } from 'react';
import type { AppSettings } from '../types';
import { SaveIcon, NotificationIcon, PrivacyIcon, SunIcon } from './icons';
import ToggleSwitch from './ToggleSwitch';

const defaultSettings: AppSettings = {
  notifications: {
    email: true,
    push: false,
  },
  privacy: {
    profileVisibility: 'public',
  },
  appearance: {
    themeDefault: 'system',
  },
};

const getAppSettings = (): AppSettings => {
  if (typeof window === 'undefined') return defaultSettings;
  const savedSettings = localStorage.getItem('arcaneAppSettings');
  return savedSettings ? { ...defaultSettings, ...JSON.parse(savedSettings) } : defaultSettings;
};

const saveAppSettings = (settings: AppSettings) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('arcaneAppSettings', JSON.stringify(settings));
  }
};

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setSettings(getAppSettings());
  }, []);

  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    saveAppSettings(settings);
    setHasChanges(false);
    // Optional: Show a success toast/message
  };

  const Section: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
      <div className="border-b border-gray-200 dark:border-arcane-primary pb-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
              {icon}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          </div>
          <div className="space-y-4 pl-10">
              {children}
          </div>
      </div>
  );

  return (
    <div className="p-8 sm:p-12 text-gray-900 dark:text-arcane-text">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white">Application Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your preferences for the ARCANE ecosystem.</p>
      </header>

      <div className="max-w-2xl mx-auto">
        <Section title="Notifications" icon={<NotificationIcon className="w-6 h-6 text-arcane-highlight" />}>
            <ToggleSwitch 
                label="Email Notifications" 
                enabled={settings.notifications.email} 
                onChange={(enabled) => updateSetting('notifications', { ...settings.notifications, email: enabled })}
            />
             <ToggleSwitch 
                label="Push Notifications" 
                enabled={settings.notifications.push} 
                onChange={(enabled) => updateSetting('notifications', { ...settings.notifications, push: enabled })}
            />
        </Section>
        
        <Section title="Privacy" icon={<PrivacyIcon className="w-6 h-6 text-arcane-highlight" />}>
            <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Profile Visibility</label>
                <div className="flex gap-4">
                    {['public', 'private'].map((option) => (
                        <button key={option} onClick={() => updateSetting('privacy', { profileVisibility: option as 'public' | 'private' })} className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition ${settings.privacy.profileVisibility === option ? 'bg-arcane-accent text-white' : 'bg-gray-200 dark:bg-arcane-primary'}`}>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </Section>
        
        <Section title="Appearance" icon={<SunIcon className="w-6 h-6 text-arcane-highlight" />}>
            <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Default Theme</label>
                 <div className="flex gap-4">
                    {['system', 'light', 'dark'].map((option) => (
                        <button key={option} onClick={() => updateSetting('appearance', { themeDefault: option as 'system' | 'light' | 'dark' })} className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition ${settings.appearance.themeDefault === option ? 'bg-arcane-accent text-white' : 'bg-gray-200 dark:bg-arcane-primary'}`}>
                            {option}
                        </button>
                    ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">'System' will match your device's theme preference.</p>
            </div>
        </Section>

        <div className="mt-8 flex justify-end">
            <button onClick={handleSave} disabled={!hasChanges} className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
                <SaveIcon className="w-5 h-5" />
                {hasChanges ? 'Save Changes' : 'Saved'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;