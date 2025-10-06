import React from 'react';

const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 14.6565L7.76985 12L4 9.3435V14.6565Z" fill="#FF9900"/>
    <path d="M20 14.6565L16.2301 12L20 9.3435V14.6565Z" fill="#FF9900"/>
    <path d="M8.28821 16.5L12 11.2857L15.7118 16.5H8.28821Z" fill="#FF9900"/>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#232F3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 19L11.5 12.5L14 6" stroke="#232F3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default AWSIcon;