


import type { TokenomicItem, AirdropSplitItem, RoadmapPhase, TokenPricePoint, EcosystemFeature, MarketplaceItem, CloudStat, AdminUser, SystemStatus, DatingProfile, HostedSaaSApp } from './types';
import { CartIcon, ChatIcon, HeartIcon, BankIcon, BriefcaseIcon, CloudIcon, ServerIcon, DatabaseIcon, CreditIcon, NetworkIcon } from './components/icons';

export const NAV_LINKS = ['Ecosystem', 'Tokenomics', 'Roadmap', 'Technology'];

export const TOKENOMICS_DATA: TokenomicItem[] = [
  { name: 'Airdrop Pool', value: 30, tokens: '300M', notes: '5 years linear', fill: '#08d9d6' },
  { name: 'Development Fund', value: 20, tokens: '200M', notes: '1y lock, 5% quarterly', fill: '#7e22ce' },
  { name: 'Founders & Team', value: 15, tokens: '150M', notes: '2y lock + vesting', fill: '#c084fc' },
  { name: 'Investors / Partners', value: 15, tokens: '150M', notes: 'Seed + private', fill: '#a78bfa' },
  { name: 'Liquidity', value: 10, tokens: '100M', notes: 'DEX/CEX', fill: '#818cf8' },
  { name: 'AI Growth Fund', value: 5, tokens: '50M', notes: 'AI R&D + credits', fill: '#ff2e63' },
  { name: 'Community Treasury (DAO)', value: 5, tokens: '50M', notes: 'Governance pool', fill: '#f472b6' },
];

export const AIRDROP_SPLIT_DATA: AirdropSplitItem[] = [
    { name: 'DAO Treasury', value: 40 },
    { name: 'Staking Rewards', value: 20 },
    { name: 'Onboarding Tasks', value: 15 },
    { name: 'Referral Growth', value: 15 },
    { name: 'Genesis (Early Adopters)', value: 10 },
];

export const ROADMAP_DATA: RoadmapPhase[] = [
    {
        sprints: "1-2",
        duration: "0-3 Months",
        items: [
            { title: "Foundation", duration: "", tasks: ["ARC Token smart contract", "TatashiMarket MVP (basic)", "OpenNebula test cluster", "AI Co-Founder Lite", "Basic onboarding + dashboard"] }
        ]
    },
    {
        sprints: "3-4",
        duration: "3-6 Months",
        items: [
            { title: "Expansion", duration: "", tasks: ["Messenger (Signal baseline)", "Finance staking module", "Travel listings", "Rexy v0.1 recommendations", "Business Tools Lite"] }
        ]
    },
    {
        sprints: "5-6",
        duration: "6-12 Months",
        items: [
            { title: "Integration", duration: "", tasks: ["Hybrid OpenNebula cloud", "Vendor SaaS hosting", "AI Co-Founder premium features", "Dating module v1", "Messenger groups + file sharing", "Social account linking"] }
        ]
    },
    {
        sprints: "7+",
        duration: "12-24 Months",
        items: [
            { title: "Decentralization", duration: "", tasks: ["Edge deployments", "Rexy v2 adaptive AI", "Decentralized ARCANE Cloud", "DAO governance + policy voting", "Full SaaS marketplace", "Airdrop + referral campaigns"] }
        ]
    }
];

export const TOKEN_PRICE_HISTORY_DATA: TokenPricePoint[] = [
    { date: 'May 1', price: 1.12 },
    { date: 'May 2', price: 1.15 },
    { date: 'May 3', price: 1.18 },
    { date: 'May 4', price: 1.16 },
    { date: 'May 5', price: 1.21 },
    { date: 'May 6', price: 1.25 },
    { date: 'May 7', price: 1.23 },
    { date: 'May 8', price: 1.28 },
    { date: 'May 9', price: 1.32 },
    { date: 'May 10', price: 1.30 },
    { date: 'May 11', price: 1.35 },
    { date: 'May 12', price: 1.41 },
    { date: 'May 13', price: 1.38 },
    { date: 'May 14', price: 1.45 },
];

export const ECOSYSTEM_FEATURES: EcosystemFeature[] = [
  {
    name: 'TatashiMarket',
    description: 'A decentralized marketplace for goods, services, travel, and vendor SaaS hosting, powered by ARC tokens and a Seaport-style offer engine.',
    icon: CartIcon,
    keyFeatures: ['ARC Token Payments', 'Travel & Vacation Module', 'Vendor SaaS Hosting', 'Logistics & Agency Services'],
    techStack: ['Ruby on Rails', 'Solidus', 'Next.js', 'Solana'],
  },
  {
    name: 'Secure Messenger',
    description: 'A private communication platform built on the Signal Protocol, featuring P2P Bluetooth mesh capabilities for offline resilience.',
    icon: ChatIcon,
    keyFeatures: ['End-to-End Encryption', 'P2P Bluetooth Mesh', 'Group & Channel Chats', 'Encrypted File Sharing'],
    techStack: ['Signal Protocol', 'React Native', 'libp2p', 'WebRTC'],
  },
  {
    name: 'Dating & Social',
    description: 'A next-generation social discovery platform utilizing the proprietary Rexy AI algorithm for personalized matching and content recommendations.',
    icon: HeartIcon,
    keyFeatures: ['AI Match Scoring', 'Personalized Recommendations', 'Privacy-First Design', 'Encrypted Interactions'],
    techStack: ['Python (AI)', 'Next.js', 'Solana'],
  },
  {
    name: 'Decentralized Finance',
    description: 'A suite of financial tools allowing users to stake ARC tokens, manage cloud compute credits, and access DeFi primitives like borrowing and financing.',
    icon: BankIcon,
    keyFeatures: ['ARC Token Staking', 'Cloud Credit Billing', 'DeFi Lending/Borrowing', 'User Finance Dashboard'],
    techStack: ['Rust (Anchor)', 'Solana', 'Chainlink Oracles'],
  },
  {
    name: 'Business Tools',
    description: 'An integrated suite for professionals, including a lightweight CRM, analytics, reporting, and a marketplace for third-party SaaS applications.',
    icon: BriefcaseIcon,
    keyFeatures: ['CRM-lite (Contacts, Leads)', 'Product Management', 'Analytics & Reporting', '3rd-Party App Marketplace'],
    techStack: ['Ruby on Rails', 'Next.js', 'PostgreSQL'],
  },
  {
    name: 'ARCANE Cloud',
    description: 'A hybrid cloud and edge computing network providing storage and compute resources, billed transparently in ARC tokens.',
    icon: CloudIcon,
    keyFeatures: ['Compute & Storage Credits', 'Container/VM Orchestration', 'Hybrid Cloud Setup (AWS/Azure)', 'Edge Node Deployments'],
    techStack: ['OpenNebula', 'Kubernetes', 'Docker', 'IPFS'],
  },
];

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
    { id: 1, name: 'Quantum VR Headset', vendor: 'Nexus Systems', price: 1250, imageUrl: 'https://placehold.co/600x400/7e22ce/ffffff?text=VR+Headset' },
    { id: 2, name: 'Decentralized VPN Service', vendor: 'PrivacyNet', price: 35, imageUrl: 'https://placehold.co/600x400/08d9d6/0a091e?text=VPN' },
    { id: 3, name: 'AI-Powered Art Commission', vendor: 'Artifex AI', price: 200, imageUrl: 'https://placehold.co/600x400/ff2e63/ffffff?text=AI+Art' },
    { id: 4, name: 'Solana Smart Contract Audit', vendor: 'CertiChain', price: 3500, imageUrl: 'https://placehold.co/600x400/c084fc/0a091e?text=Audit' },
];

export const CLOUD_STATS: CloudStat[] = [
    { name: 'Active Instances', value: '1,204', icon: ServerIcon },
    { name: 'Storage Used', value: '4.2 PB', icon: DatabaseIcon },
    { name: 'Compute Credits', value: '1.8M ARC', icon: CreditIcon },
    { name: 'Data Transfer', value: '12.5 TB/s', icon: NetworkIcon },
];

export const MOCK_USERS: AdminUser[] = [
  { id: 'usr_001', username: 'genesis', email: 'genesis@arcane.so', isVerified: true, isBanned: false, joinDate: '2023-01-15' },
  { id: 'usr_002', username: 'rex', email: 'rexy@arcane.ai', isVerified: true, isBanned: false, joinDate: '2023-03-22' },
  { id: 'usr_003', username: 'cypher', email: 'cypher@proton.me', isVerified: false, isBanned: false, joinDate: '2023-05-10' },
  { id: 'usr_004', username: 'glitch', email: 'glitch@hotmail.com', isVerified: true, isBanned: true, joinDate: '2023-06-01' },
  { id: 'usr_005', username: 'nova', email: 'nova@arcane.so', isVerified: false, isBanned: false, joinDate: '2024-02-18' },
];

export const SYSTEM_STATUS: SystemStatus[] = [
  { serviceName: 'API Gateway', status: 'Online', latency: 32 },
  { serviceName: 'Solana RPC Node', status: 'Online', latency: 78 },
  { serviceName: 'PostgreSQL DB', status: 'Online', latency: 12 },
  { serviceName: 'Redis Cache', status: 'Online', latency: 5 },
  { serviceName: 'AI Inference Service', status: 'Degraded', latency: 450 },
  { serviceName: 'IPFS Pinning Service', status: 'Online', latency: 120 },
  { serviceName: 'n8n Automation Engine', status: 'Online', latency: 25 },
  { serviceName: 'Exonum Sidechain Anchor', status: 'Offline', latency: 0 },
];

export const DATING_PROFILES: DatingProfile[] = [
    { id: 1, name: 'Nova', age: 28, bio: 'Quantum physicist exploring the intersection of consciousness and code.', imageUrl: 'https://placehold.co/600x800/ff2e63/ffffff?text=Nova', matchScore: 94 },
    { id: 2, name: 'Cypher', age: 31, bio: 'Building decentralized futures, one line of Rust at a time.', imageUrl: 'https://placehold.co/600x800/c084fc/0a091e?text=Cypher', matchScore: 88 },
    { id: 3, name: 'Echo', age: 25, bio: 'Digital artist weaving dreams into VR landscapes. Looking for a co-op partner.', imageUrl: 'https://placehold.co/600x800/08d9d6/ffffff?text=Echo', matchScore: 82 },
    { id: 4, name: 'Glitch', age: 33, bio: 'DeFi degen with a passion for yield farming and obscure 80s synth-pop.', imageUrl: 'https://placehold.co/600x800/a78bfa/0a091e?text=Glitch', matchScore: 76 },
];

export const HOSTED_SAAS_APPS: HostedSaaSApp[] = [
    { id: 1, name: 'ChainTrack Analytics', category: 'DeFi Analytics', monthlyPrice: 150, imageUrl: 'https://placehold.co/600x400/7e22ce/ffffff?text=Analytics' },
    { id: 2, name: 'IPFS Pinning Pro', category: 'Decentralized Storage', monthlyPrice: 50, imageUrl: 'https://placehold.co/600x400/08d9d6/0a091e?text=Storage' },
    { id: 3, name: 'DAO Manager Suite', category: 'Governance', monthlyPrice: 200, imageUrl: 'https://placehold.co/600x400/ff2e63/ffffff?text=DAO+Tools' },
    { id: 4, name: 'Solana Pay Gateway', category: 'Payments', monthlyPrice: 75, imageUrl: 'https://placehold.co/600x400/c084fc/0a091e?text=Payments' },
];