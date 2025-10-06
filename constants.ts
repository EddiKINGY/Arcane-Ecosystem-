
import type { TokenomicItem, AirdropSplitItem, RoadmapPhase } from './types';

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
