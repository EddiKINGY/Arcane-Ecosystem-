import React from 'react';

const BotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a3.375 3.375 0 00-3.375 3.375v1.5c0 1.86 1.515 3.375 3.375 3.375h9.75c1.86 0 3.375-1.515 3.375-3.375v-1.5A3.375 3.375 0 0018.375 6.75h-9.75z" clipRule="evenodd" />
    <path d="M11.25 12.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
  </svg>
);

export default BotIcon;