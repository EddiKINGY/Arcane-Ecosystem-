# ARCANE Ecosystem Changelog

All notable changes to this project will be documented in this file.

## [0.6.0] - 2024-05-26

### Added
- **Ecosystem Explorer**: Implemented a new modal view, accessible from the "Explore Ecosystem" button, that provides a detailed and interactive breakdown of each core component of the ARCANE ecosystem.
- **Detailed Component Cards**: Each feature (e.g., TatashiMarket, Secure Messenger) is now presented with its own card detailing its purpose, key features, and technology stack.
- **New Icons**: Added specific icons for Marketplace, Messenger, Dating, Finance, and Business Tools to enhance visual identification.
- **Component Refactor**: The `TechPill` component was extracted from the Dashboard into its own reusable component.

## [0.5.0] - 2024-05-25

### Added
- **AI Co-Founder Chat**: Implemented a floating chat widget for users to interact with the AI Co-Founder.
- **Simulated Conversation Flow**: The chat interface includes a welcome message, message history, and simulates AI responses to user input.
- **Typing Indicator**: A visual "typing" indicator is displayed with a delay to create a more natural and engaging user experience while waiting for an AI response.

## [0.4.0] - 2024-05-24

### Added
- **ARC Token Performance Chart**: Integrated a new module in the Tokenomics section to display the ARC token's current price, market cap, volume, and a historical price chart. This provides a real-time financial overview of the token's market performance.

## [0.3.0] - 2024-05-23

### Added
- **Technical Architecture Document**: Integrated the comprehensive technical specification into the dashboard. It's accessible via a "Technical Docs" button and provides developers with a canonical reference for architecture, APIs, contracts, and phased milestones.

## [0.2.0] - 2024-05-22

### Added
- **Dark Mode Toggle**: Implemented a light/dark mode theme switcher in the header.
- **Theme Persistence**: User's theme preference is now saved to `localStorage` and is respected on subsequent visits. The system's preferred color scheme is used as a fallback.
- **Theme-Aware UI**: All components have been updated to support both light and dark themes for a consistent user experience.

## [0.1.0] - 2024-05-21

### Added
- **Initial Dashboard UI**: Created the foundational user interface for the ARCANE ecosystem dashboard, including sections for Ecosystem, Tokenomics, Roadmap, and Technology.
- **Crystalline Design Language**: Implemented the 3D, crystalline, futuristic, arcane-inspired design across all components.
- **Interactive Charts**: Added a pie chart for Tokenomics visualization using Recharts.
- **Dynamic Roadmap**: Built a vertical timeline for the project roadmap with on-scroll animations.
- **Whitepaper Modal**: Created a whitepaper component presented within a modal for a focused reading experience.