
export interface TokenomicItem {
  name: string;
  value: number;
  tokens: string;
  notes: string;
  fill: string;
}

export interface AirdropSplitItem {
  name: string;
  value: number;
}

export interface Sprint {
  title: string;
  duration: string;
  tasks: string[];
}

export interface RoadmapPhase {
  sprints: string;
  duration: string;
  items: Sprint[];
}

export interface TokenPricePoint {
    date: string;
    price: number;
}

export interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export interface EcosystemFeature {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  keyFeatures: string[];
  techStack: string[];
}
