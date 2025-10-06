


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

export interface MarketplaceItem {
  id: number;
  name: string;
  vendor: string;
  price: number;
  imageUrl: string;
}

export interface CloudStat {
  name: string;
  value: string;
  icon: React.ComponentType<any>;
}

export type SocialConnections = {
  twitter?: string;
  github?: string;
  discord?: string;
};

export interface UserProfile {
  username: string;
  bio: string;
  avatarUrl: string;
  linkedAccounts: SocialConnections;
}

export interface AppSettings {
  notifications: {
    email: boolean;
    push: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private';
  };
  appearance: {
    themeDefault: 'system' | 'light' | 'dark';
  };
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  isVerified: boolean;
  isBanned: boolean;
  joinDate: string;
}

export interface SystemStatus {
  serviceName: string;
  status: 'Online' | 'Offline' | 'Degraded';
  latency: number;
}

export interface DatingProfile {
    id: number;
    name: string;
    age: number;
    bio: string;
    imageUrl: string;
    matchScore: number;
}

export interface HostedSaaSApp {
    id: number;
    name: string;
    category: string;
    monthlyPrice: number;
    imageUrl: string;
}