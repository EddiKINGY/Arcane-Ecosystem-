import React, { useState } from 'react';
import Card from './Card';
import Section from './Section';
import TokenomicsChart from './TokenomicsChart';
import Roadmap from './Roadmap';
import Modal from './Modal';
import Whitepaper from './Whitepaper';
import { BlockchainIcon, CloudIcon, AIIcon, AppsIcon, GrowthIcon } from './icons';

const TechPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-arcane-primary text-arcane-highlight text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
    {children}
  </span>
);

const Dashboard: React.FC = () => {
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="text-center animate-fade-in py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
            Architecting the Future with <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-arcane-accent to-arcane-cyan">
              ARCANE
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            A decentralized ecosystem on Solana, integrating Business, Social, Cloud, AI, and Finance into a seamless digital reality.
          </p>
          <div className="mt-10 flex justify-center gap-4">
              <button className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-arcane-accent/30">
                  Explore Ecosystem
              </button>
              <button 
                onClick={() => setIsWhitepaperOpen(true)}
                className="bg-arcane-secondary hover:bg-arcane-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                  Whitepaper
              </button>
          </div>
        </div>

        <Section 
          id="ecosystem"
          title="The ARCANE Ecosystem"
          subtitle="A unified platform for the next generation of digital interaction, built on a foundation of decentralization and intelligent automation."
          icon={<AppsIcon />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">TatashiMarket</h3>
                  <p className="text-gray-400 mt-2">A decentralized marketplace for goods, services, travel, and vendor SaaS hosting, powered by ARC tokens.</p>
              </Card>
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">Secure Messenger</h3>
                  <p className="text-gray-400 mt-2">Signal Protocol-based messaging with P2P Bluetooth mesh for resilient, private communication.</p>
              </Card>
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">Dating & Social</h3>
                  <p className="text-gray-400 mt-2">AI-driven matching and recommendations via the Rexy algorithm, ensuring privacy and security.</p>
              </Card>
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">Decentralized Finance</h3>
                  <p className="text-gray-400 mt-2">Stake ARC tokens, manage cloud credits, and access DeFi services like borrowing and travel financing.</p>
              </Card>
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">Business Tools</h3>
                  <p className="text-gray-400 mt-2">An integrated suite including a CRM, analytics, and a marketplace for 3rd-party SaaS applications.</p>
              </Card>
              <Card isGlow>
                  <h3 className="text-xl font-bold text-white">ARCANE Cloud</h3>
                  <p className="text-gray-400 mt-2">Hybrid and edge compute/storage resources, billed in ARC, powering the entire ecosystem.</p>
              </Card>
          </div>
        </Section>
        
        <Section
          id="tokenomics"
          title="ARC Tokenomics"
          subtitle="A fixed-supply SPL token designed to fuel the ecosystem, incentivize participation, and facilitate governance."
          icon={<BlockchainIcon />}
        >
          <TokenomicsChart />
        </Section>

        <Section
          id="roadmap"
          title="Development Roadmap"
          subtitle="A phased approach to building the ARCANE ecosystem, from foundational contracts to a fully decentralized network."
          icon={<GrowthIcon />}
        >
          <Roadmap />
        </Section>
        
        <Section
          id="technology"
          title="Technology Stack"
          subtitle="Leveraging robust, scalable, and decentralized technologies to build a resilient and future-proof platform."
          icon={<AIIcon />}
        >
          <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                      <h4 className="text-lg font-bold text-white mb-3">Blockchain</h4>
                      <TechPill>Solana</TechPill>
                      <TechPill>Rust</TechPill>
                      <TechPill>Anchor</TechPill>
                      <TechPill>Python</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white mb-3">Core Services</h4>
                      <TechPill>Ruby on Rails</TechPill>
                      <TechPill>Solidus</TechPill>
                      <TechPill>Next.js</TechPill>
                      <TechPill>n8n Automation</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white mb-3">Infrastructure</h4>
                      <TechPill>Docker</TechPill>
                      <TechPill>Kubernetes</TechPill>
                      <TechPill>OpenNebula</TechPill>
                      <TechPill>CI/CD</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white mb-3">Decentralization</h4>
                      <TechPill>IPFS</TechPill>
                      <TechPill>Arweave</TechPill>
                      <TechPill>libp2p</TechPill>
                      <TechPill>Signal Protocol</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-white mb-3">AI & Frontend</h4>
                      <TechPill>OpenAI API</TechPill>
                      <TechPill>React Native</TechPill>
                      <TechPill>Gemini API</TechPill>
                  </div>
              </div>
          </Card>
        </Section>

      </div>
      <Modal isOpen={isWhitepaperOpen} onClose={() => setIsWhitepaperOpen(false)}>
        <Whitepaper />
      </Modal>
    </>
  );
};

export default Dashboard;