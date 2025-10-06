import React from 'react';
import { TOKENOMICS_DATA, ROADMAP_DATA } from '../constants';

const WhitepaperSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="font-serif text-3xl font-bold text-arcane-highlight border-b-2 border-arcane-primary pb-2 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const Whitepaper: React.FC = () => {
  return (
    <div className="p-8 sm:p-12 font-sans text-arcane-text">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-4xl font-bold tracking-wider text-white">ARCANE</h1>
        </div>
        <p className="text-xl font-serif text-gray-400">Ecosystem Whitepaper v0.1.0</p>
      </header>

      <WhitepaperSection title="1. Abstract">
        <p>
          ARCANE is a decentralized digital ecosystem built on the Solana blockchain, designed to seamlessly integrate Business, Social, Cloud Computing, Artificial Intelligence, and Finance. Our vision is to create a unified platform that empowers users with resilient, private, and intelligent tools for a new era of digital interaction. By leveraging a fixed-supply SPL token (ARC), the ecosystem fosters a self-sustaining economy that rewards participation, facilitates governance, and powers a suite of interconnected applications.
        </p>
      </WhitepaperSection>

      <WhitepaperSection title="2. The ARCANE Ecosystem">
        <p>The ecosystem is comprised of several core components, each designed to function independently while contributing to the network's overall value:</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>TatashiMarket:</strong> A decentralized marketplace for goods, services, and travel, with integrated SaaS hosting for vendors, all powered by the ARC token.</li>
            <li><strong>Secure Messenger:</strong> A private communication platform built on the Signal Protocol, featuring P2P Bluetooth mesh capabilities for offline resilience.</li>
            <li><strong>Dating & Social:</strong> A next-generation social discovery platform utilizing the proprietary Rexy AI algorithm for personalized matching and content recommendations.</li>
            <li><strong>Decentralized Finance (DeFi):</strong> A suite of financial tools allowing users to stake ARC tokens, manage cloud compute credits, and access DeFi primitives like borrowing and financing.</li>
            <li><strong>Business Tools:</strong> Integrated solutions for professionals, including a lightweight CRM, analytics dashboards, and a marketplace for third-party SaaS applications.</li>
            <li><strong>ARCANE Cloud:</strong> A hybrid cloud and edge computing network providing storage and compute resources, billed transparently in ARC tokens.</li>
        </ul>
      </WhitepaperSection>

      <WhitepaperSection title="3. ARC Tokenomics">
        <p>The ARC token is a fixed-supply SPL utility token with a total supply of 1,000,000,000. It is the core economic driver of the ecosystem.</p>
        <div className="overflow-x-auto">
            <table className="w-full text-left crystalline-card">
                <thead>
                    <tr className="border-b border-arcane-primary">
                        <th className="p-3">Category</th>
                        <th className="p-3">%</th>
                        <th className="p-3">Tokens</th>
                        <th className="p-3">Vesting / Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {TOKENOMICS_DATA.map(item => (
                        <tr key={item.name} className="border-b border-arcane-secondary/50">
                            <td className="p-3 font-semibold" style={{color: item.fill}}>{item.name}</td>
                            <td className="p-3">{item.value}%</td>
                            <td className="p-3">{item.tokens}</td>
                            <td className="p-3 text-sm text-gray-400">{item.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </WhitepaperSection>

       <WhitepaperSection title="4. Development Roadmap">
        {ROADMAP_DATA.map(phase => (
            <div key={phase.sprints} className="mb-6">
                <h3 className="text-xl font-bold text-white">Sprints {phase.sprints} ({phase.duration}) - {phase.items[0].title}</h3>
                <ul className="list-disc list-inside pl-4 mt-2 text-gray-400">
                    {phase.items[0].tasks.map(task => (
                        <li key={task}>{task}</li>
                    ))}
                </ul>
            </div>
        ))}
      </WhitepaperSection>
      
      <footer className="text-center mt-12 pt-8 border-t border-arcane-primary">
        <button className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-arcane-accent/30 mb-4">
            Download PDF
        </button>
        <p className="text-gray-500 text-sm">ARCANE Ecosystem &copy; 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Whitepaper;