import React, { useState, useEffect, useRef } from 'react';
import { ROADMAP_DATA } from '../constants';
import type { RoadmapPhase } from '../types';
import Card from './Card';

// This sub-component handles the intersection observer logic for on-scroll animations.
const RoadmapPhaseItem: React.FC<{ phase: RoadmapPhase; index: number }> = ({ phase, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view, set isVisible to true.
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to prevent re-animation.
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible.
        rootMargin: '0px 0px -50px 0px', // Trigger animation slightly before it's fully in view.
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Cleanup observer on component unmount.
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // By applying the animation to the entire item, we create a more cohesive and dynamic effect.
  // The 'opacity-0' class ensures the item is hidden until the animation starts.
  // Increased stagger delay (0.15s) and duration (0.7s) make the entrance feel more significant.
  return (
    <div 
      ref={ref} 
      className={`roadmap-item flex items-start mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s`, animationDuration: '0.7s' }}
    >
      <div className="relative roadmap-line">
        <div className="w-10 h-10 bg-gray-200 dark:bg-arcane-primary rounded-full flex items-center justify-center ring-4 ring-gray-50 dark:ring-arcane-bg">
          <span className="font-mono font-bold text-gray-900 dark:text-white">{phase.sprints}</span>
        </div>
      </div>
      <div className="ml-8 w-full">
        <Card isGlow={true}>
          <p className="absolute -top-4 -left-4 bg-arcane-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {phase.duration}
          </p>
          {phase.items.map(item => (
            <div key={item.title}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {item.tasks.map(task => (
                  <li key={task} className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 text-arcane-cyan flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <div className="relative">
      {ROADMAP_DATA.map((phase, index) => (
        <RoadmapPhaseItem key={phase.sprints} phase={phase} index={index} />
      ))}
    </div>
  );
};

export default Roadmap;