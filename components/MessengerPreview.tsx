import React from 'react';
import Card from './Card';
import { UserIcon, ImageIcon, PaperclipIcon } from './icons';

const MessengerPreview: React.FC = () => {
  return (
    <Card isGlow>
      <div className="flex flex-col md:flex-row h-[500px] overflow-hidden rounded-xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-gray-100/50 dark:bg-arcane-secondary/50 p-4 border-r border-gray-200 dark:border-arcane-primary/50">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Chats</h3>
          <div className="space-y-2">
            {/* Selected Chat */}
            <div className="p-3 bg-arcane-accent/20 rounded-lg">
              <p className="font-bold text-arcane-accent dark:text-arcane-highlight"># arcane-devs</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">Nova: Just pushed the latest spec...</p>
            </div>
            <div className="p-3 hover:bg-gray-200 dark:hover:bg-arcane-primary rounded-lg cursor-pointer">
              <p className="font-semibold text-gray-900 dark:text-white">Cypher</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Sounds good, I'll review it.</p>
            </div>
            <div className="p-3 hover:bg-gray-200 dark:hover:bg-arcane-primary rounded-lg cursor-pointer">
              <p className="font-semibold text-gray-900 dark:text-white">Echo</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Check out this new VR concept!</p>
            </div>
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="flex-1 flex flex-col p-4">
          <div className="flex-grow space-y-4 overflow-y-auto pr-2">
            {/* Message 1 */}
            <div className="flex items-start gap-3">
              <UserIcon className="w-8 h-8 rounded-full bg-gray-200 dark:bg-arcane-primary p-1 text-gray-500" />
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">Nova <span className="text-xs text-gray-400 font-normal">10:32 AM</span></p>
                <div className="mt-1 text-sm bg-gray-200 dark:bg-arcane-secondary p-3 rounded-lg rounded-tl-none">
                    Just pushed the latest spec for the Seaport integration. Can you guys take a look?
                </div>
              </div>
            </div>
            {/* Message 2 */}
            <div className="flex items-start gap-3">
              <UserIcon className="w-8 h-8 rounded-full bg-gray-200 dark:bg-arcane-primary p-1 text-gray-500" />
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">Cypher <span className="text-xs text-gray-400 font-normal">10:34 AM</span></p>
                <div className="mt-1 text-sm bg-gray-200 dark:bg-arcane-secondary p-3 rounded-lg rounded-tl-none">
                    On it. Also, Echo, you were asking about the new UI mockups. Here they are.
                </div>
                 <div className="mt-2 bg-gray-200 dark:bg-arcane-secondary p-2 rounded-lg border border-gray-300 dark:border-arcane-primary">
                    <img src="https://placehold.co/400x200/08d9d6/0a091e?text=UI+Mockup" alt="UI Mockup" className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 p-2 bg-gray-100 dark:bg-arcane-secondary rounded-lg">
            <button className="p-2 text-gray-500 hover:text-arcane-accent"><PaperclipIcon className="w-5 h-5" /></button>
            <input type="text" placeholder="Message # arcane-devs" className="w-full bg-transparent focus:outline-none text-sm" />
            <button className="p-2 text-gray-500 hover:text-arcane-accent"><ImageIcon className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MessengerPreview;