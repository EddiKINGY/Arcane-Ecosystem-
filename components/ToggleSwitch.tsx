import React from 'react';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange }) => {
  return (
    <label htmlFor={label} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id={label}
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`block w-14 h-8 rounded-full transition ${enabled ? 'bg-arcane-accent' : 'bg-gray-300 dark:bg-arcane-primary'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </div>
      <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
        {label}
      </div>
    </label>
  );
};

export default ToggleSwitch;