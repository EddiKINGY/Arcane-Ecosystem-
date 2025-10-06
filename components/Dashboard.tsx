import React, { useState } from 'react';
import Card from './Card';
import Section from './Section';
import TokenomicsChart from './TokenomicsChart';
import Roadmap from './Roadmap';
import Modal from './Modal';
import Whitepaper from './Whitepaper';
import TechnicalArchitecture from './TechnicalArchitecture';
import ExploreEcosystem from './ExploreEcosystem';
import TechPill from './TechPill';
import WelcomeBanner from './WelcomeBanner';
import TatashiMarket from './TatashiMarket';
import ArcaneCloud from './ArcaneCloud';
import Header from './Header';
import UserProfile from './UserProfile';
import Settings from './Settings';
import AdminPanel from './AdminPanel';
import DatingModule from './DatingModule';
import MessengerPreview from './MessengerPreview';
import { BlockchainIcon, CloudIcon, AIIcon, GrowthIcon, CodeIcon, CartIcon, HeartIcon, ChatIcon } from './icons';

const Dashboard: React.FC = () => {
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);
  const [isTechDocsOpen, setIsTechDocsOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const openSettings = () => {
    setIsProfileOpen(false);
    setIsSettingsOpen(true);
  };

  return (
    <>
      <Header 
        onProfileClick={() => setIsProfileOpen(true)}
        onAdminClick={() => setIsAdminOpen(true)} 
      />
      <div className="container mx-auto py-10">
        <div className="text-center animate-fade-in py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
            Architecting the Future with <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-arcane-accent to-arcane-cyan">
              ARCANE
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            A decentralized ecosystem on Solana, integrating Business, Social, Cloud, AI, and Finance into a seamless digital reality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsEcosystemOpen(true)}
                className="bg-arcane-accent hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg shadow-arcane-accent/30"
              >
                  Explore Ecosystem
              </button>
              <button 
                onClick={() => setIsWhitepaperOpen(true)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-arcane-secondary dark:hover:bg-arcane-primary text-gray-800 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                  Whitepaper
              </button>
              <button 
                onClick={() => setIsTechDocsOpen(true)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-arcane-secondary dark:hover:bg-arcane-primary text-gray-800 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                  <CodeIcon className="w-5 h-5" />
                  Technical Docs
              </button>
          </div>
        </div>
        
        <WelcomeBanner />

        <Section 
          id="ecosystem"
          title="TatashiMarket"
          subtitle="Our decentralized marketplace now includes SaaS hosting alongside goods, services, and travel."
          icon={<CartIcon className="h-6 w-6 text-arcane-highlight" />}
        >
          <TatashiMarket />
        </Section>
        
        <Section 
          id="dating"
          title="Dating Module v1"
          subtitle="Discover connections with our AI-powered social discovery platform, powered by the Rexy algorithm."
          icon={<HeartIcon className="h-6 w-6 text-arcane-highlight" />}
        >
          <DatingModule />
        </Section>

        <Section 
          id="messenger"
          title="Secure Messenger"
          subtitle="An enhanced preview of our Signal-protocol based messenger, now with group and file sharing capabilities."
          icon={<ChatIcon className="h-6 w-6 text-arcane-highlight" />}
        >
          <MessengerPreview />
        </Section>

        <Section 
          id="cloud"
          title="ARCANE Cloud Status"
          subtitle="A real-time overview of our foundational infrastructure, now featuring hybrid cloud connections."
          icon={<CloudIcon />}
        >
          <ArcaneCloud />
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
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Blockchain</h4>
                      <TechPill>Solana</TechPill>
                      <TechPill>Rust</TechPill>
                      <TechPill>Anchor</TechPill>
                      <TechPill>Python</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Core Services</h4>
                      <TechPill>Ruby on Rails</TechPill>
                      <TechPill>Solidus</TechPill>
                      <TechPill>Next.js</TechPill>
                      <TechPill>n8n Automation</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Infrastructure</h4>
                      <TechPill>Docker</TechPill>
                      <TechPill>Kubernetes</TechPill>
                      <TechPill>OpenNebula</TechPill>
                      <TechPill>CI/CD</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Decentralization</h4>
                      <TechPill>IPFS</TechPill>
                      <TechPill>Arweave</TechPill>
                      <TechPill>libp2p</TechPill>
                      <TechPill>Signal Protocol</TechPill>
                  </div>
                  <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">AI & Frontend</h4>
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
      <Modal isOpen={isTechDocsOpen} onClose={() => setIsTechDocsOpen(false)}>
        <TechnicalArchitecture />
      </Modal>
      <Modal isOpen={isEcosystemOpen} onClose={() => setIsEcosystemOpen(false)}>
        <ExploreEcosystem />
      </Modal>
      <Modal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
        <UserProfile onOpenSettings={openSettings} />
      </Modal>
      <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
        <Settings />
      </Modal>
      <Modal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)}>
        <AdminPanel />
      </Modal>
    </>
  );
};

export default Dashboard;