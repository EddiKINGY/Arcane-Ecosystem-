import React, { useState } from 'react';
import { MARKETPLACE_ITEMS, HOSTED_SAAS_APPS } from '../constants';
import Card from './Card';
import { PuzzleIcon } from './icons';

const TatashiMarket: React.FC = () => {
    const [activeTab, setActiveTab] = useState('goods');

    const renderGoods = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{ animationDuration: '0.3s' }}>
            {MARKETPLACE_ITEMS.map((item, index) => (
                <Card key={item.id} className="flex flex-col overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-xl" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-grow">{item.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">by {item.vendor}</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-xl font-bold text-arcane-accent dark:text-arcane-highlight">{item.price.toLocaleString()} ARC</p>
                            <button className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-transform duration-300 hover:scale-105">
                                View
                            </button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );

    const renderSaaS = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{ animationDuration: '0.3s' }}>
            {HOSTED_SAAS_APPS.map((app, index) => (
                <Card key={app.id} className="flex flex-col overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={app.imageUrl} alt={app.name} className="w-full h-48 object-cover rounded-t-xl" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{app.category}</p>
                        <div className="flex items-center justify-between mt-4 flex-grow">
                            <p className="text-xl font-bold text-arcane-accent dark:text-arcane-highlight">{app.monthlyPrice} ARC/mo</p>
                            <button className="bg-arcane-cyan hover:bg-cyan-500 text-arcane-bg font-bold py-2 px-4 rounded-lg text-sm transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                                <PuzzleIcon className="w-4 h-4" /> Deploy
                            </button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );

    return (
        <div>
            <div className="flex justify-center border-b border-gray-200 dark:border-arcane-primary mb-8">
                <button onClick={() => setActiveTab('goods')} className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'goods' ? 'text-arcane-accent dark:text-arcane-highlight border-b-2 border-arcane-accent' : 'text-gray-500 dark:text-gray-400'}`}>Goods & Services</button>
                <button onClick={() => setActiveTab('saas')} className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'saas' ? 'text-arcane-accent dark:text-arcane-highlight border-b-2 border-arcane-accent' : 'text-gray-500 dark:text-gray-400'}`}>Hosted SaaS</button>
            </div>
            {activeTab === 'goods' ? renderGoods() : renderSaaS()}
        </div>
    );
};

export default TatashiMarket;