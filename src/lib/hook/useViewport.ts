'use client';
import React from 'react';

export const useViewport = () => {
  const [width, setWidth] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, isMobile: width < 576 };
};
