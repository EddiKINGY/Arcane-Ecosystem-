import React from 'react';

const TechSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="font-serif text-3xl font-bold text-arcane-accent dark:text-arcane-highlight border-b-2 border-gray-200 dark:border-arcane-primary pb-2 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-mono">{title}</h3>
        <div className="space-y-3 text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-arcane-primary">
            {children}
        </div>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="list-disc list-inside">{children}</li>
);

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="bg-gray-100 dark:bg-arcane-secondary p-4 rounded-lg overflow-x-auto text-sm font-mono text-arcane-cyan">
        <code>{children}</code>
    </pre>
);

const TechnicalArchitecture: React.FC = () => {
  return (
    <div className="p-8 sm:p-12 font-sans text-gray-900 dark:text-arcane-text">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white">ARCANE — Technical Architecture</h1>
            <p className="text-lg font-serif text-gray-600 dark:text-gray-400 mt-2">Canonical Engineering Reference v0.3.0</p>
        </header>

        <TechSection title="1. System Overview">
            <ul className="space-y-3">
                <ListItem><strong>Blockchain layer:</strong> Solana mainnet/testnet; ARC Token (SPL) + staking, escrow, airdrop, DAO contracts (Rust/Anchor). Enterprise sidechains via <strong>Exonum</strong> for regulated B2B workflows with anchoring to Solana.</ListItem>
                <ListItem><strong>Marketplace:</strong> <strong>TatashiMarket</strong> powered by <strong>Solidus (Rails)</strong> backend + Next.js frontend; Seaport-style offer engine adapted for Solana.</ListItem>
                <ListItem><strong>Messaging:</strong> Apps (Web/React, Mobile/React Native) using <strong>Signal Protocol</strong> for E2EE and a transport abstraction supporting WebSocket/WebRTC + <strong>libp2p/Bluetooth mesh</strong> fallback.</ListItem>
                <ListItem><strong>AI Layer:</strong> <strong>Rexy</strong> (recommender microservices), <strong>AI Co-Founder</strong> (chat/flow orchestration with Ollama/Hugging Face), and partner integrations.</ListItem>
                <ListItem><strong>Cloud & Edge:</strong> <strong>OpenNebula</strong> manages ARCANE Cloud (VMs/containers), plus <strong>ARCANE Lite Node (IIAB)</strong> for offline-first deployments.</ListItem>
                <ListItem><strong>Gaming:</strong> Godot engine clients + game servers on ARCANE Cloud; Solana NFTs tradable via Seaport integration.</ListItem>
                <ListItem><strong>Automation:</strong> <strong>n8n</strong> workflows for onboarding, airdrops, payouts, and vendor automation.</ListItem>
            </ul>
        </TechSection>

        <TechSection title="2. Key Design Principles">
            <ol className="list-decimal list-inside space-y-2">
                <li><strong>Modular microservices</strong> — independent deployability.</li>
                <li><strong>Token utility first</strong> — ARC is the core unit of account.</li>
                <li><strong>Privacy-by-default</strong> — E2EE, local LLMs, encrypted data-at-rest.</li>
                <li><strong>Offline-first</strong> — IIAB nodes with bi-directional sync.</li>
                <li><strong>Security & audits</strong> — mandatory for all on-chain and critical off-chain components.</li>
                <li><strong>Developer UX</strong> — SDKs, API-first design, clear documentation.</li>
            </ol>
        </TechSection>
        
        <TechSection title="3. Logical Components">
            <SubSection title="3.1 Blockchain Services (Solana)">
                <p>Implementation: Rust + Anchor. Tools: `solana-cli`, Anchor tests, localnet.</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>ARC Token (SPL):</strong> Total supply, decimals, minting/vesting rules.</li>
                    <li><strong>Staking Contract:</strong> Stake/unstake, reward accrual.</li>
                    <li><strong>Escrow Contract:</strong> Multi-sig or program-based escrow for TatashiMarket.</li>
                    <li><strong>Airdrop Contract:</strong> Whitelist/claims, vesting schedule, task-based triggers.</li>
                    <li><strong>DAO Governance:</strong> Proposal, voting, execution hooks.</li>
                    <li><strong>Anchoring Module:</strong> Anchors Exonum ledger hashes into Solana.</li>
                </ul>
            </SubSection>
            <SubSection title="3.2 TatashiMarket & Seaport">
                <p>Core pattern is an off-chain order book (signed orders) with an on-chain settlement program.</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>Solidus Backend (Rails):</strong> Vendor management, product catalog, order lifecycle.</li>
                    <li><strong>Payment Adapter:</strong> Custom Solidus gateway for ARC/USDC payments via a Payment Orchestrator microservice.</li>
                    <li><strong>Seaport Engine:</strong> An offer/fulfill engine mirroring Seaport semantics but using Solana programs for settlement.</li>
                </ul>
            </SubSection>
             <SubSection title="3.3 AI Layer (Rexy & AI Co-Founder)">
                 <p>Kubernetes + OpenNebula for orchestration, model registry, versioning, and monitoring.</p>
                 <ul className="list-disc list-inside space-y-2 mt-2">
                     <li><strong>Rexy (Recommender):</strong> Event-driven microservice using collaborative filtering, graph embeddings, and RL models.</li>
                     <li><strong>AI Co-Founder (Orchestrator):</strong> Chatbot using LLMs from Hugging Face (hosted), Ollama (local), and partners.</li>
                 </ul>
            </SubSection>
        </TechSection>
        
        <TechSection title="4. Smart Contract Interfaces (Anchor/Rust)">
            <SubSection title="Staking Program">
                <CodeBlock>
{`stake(user_pubkey, amount, lock_period)
unstake(user_pubkey)
claim_rewards(user_pubkey)`}
                </CodeBlock>
            </SubSection>
            <SubSection title="Marketplace Escrow Program">
                <CodeBlock>
{`create_escrow(order_id, seller, buyer, asset_cid, amount)
release_escrow(escrow_id, signer)
dispute_escrow(escrow_id, reason, evidence_cid)`}
                </CodeBlock>
            </SubSection>
        </TechSection>
        
        <TechSection title="5. Repository Structure">
            <CodeBlock>
{`/arcane
  /contracts
    /solana
  /marketplace
    /solidus-customizations
    /nextjs-frontend
  /messenger
    /web
    /mobile
  /ai
    /rexy
    /cofounder
  /cloud
    /opennebula-templates
    /iiab-images
  /gaming
    /godot-sdk
  /orchestration
    /n8n-flows
    /k8s-manifests
  /docs
    /architecture.md
  /scripts`}
            </CodeBlock>
        </TechSection>

        <TechSection title="6. Phased Milestones (Developer-Facing)">
            <ul className="space-y-3">
                <li><strong>M1 (0–3mo):</strong> ARC token contract; repo scaffolding; Solidus + NextJS skeleton; OpenNebula test cluster; basic CI/CD.</li>
                <li><strong>M2 (3–6mo):</strong> Marketplace checkout with ARC; Messenger MVP with Signal; Godot SDK wrapper.</li>
                <li><strong>M3 (6–12mo):</strong> AI Co-Founder v1 (Hugging Face); Rexy v0.1; IIAB prototype image.</li>
                <li><strong>M4 (12–18mo):</strong> Seaport offer engine on Solana; Multiplayer Godot games; Staking on testnet; Exonum pilot.</li>
                <li><strong>M5 (18–24mo):</strong> Messenger Bluetooth mesh; Vircadia prototype; Ollama local LLM option; DAO alpha.</li>
            </ul>
        </TechSection>
    </div>
  );
};

export default TechnicalArchitecture;
