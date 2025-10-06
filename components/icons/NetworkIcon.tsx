import React from 'react';

const NetworkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c-4.832 0-8.716-3.914-8.716-8.747S7.168 3.503 12 3.503c4.832 0 8.716 3.914 8.716 8.747S16.832 21 12 21zm0 0a9.004 9.004 0 004.9-1.512M12 21a9.004 9.004 0 01-4.9-1.512M12 3.503a9.004 9.004 0 00-4.9 1.512M12 3.503a9.004 9.004 0 014.9 1.512M12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export default NetworkIcon;