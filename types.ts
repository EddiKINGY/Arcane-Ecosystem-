
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
