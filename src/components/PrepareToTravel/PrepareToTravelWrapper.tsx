// components/PrepareToTravelWrapper.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import PrepareToTravel from '@/components/PrepareToTravel/PrepareToTravel';

const PrepareToTravelWrapper = () => {
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKey(prev => prev + 1); // force re-render
        }
      },
      {
        threshold: 0.5, // triggers when 50% is in view
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref}>
      <PrepareToTravel key={key} />
    </div>
  );
};

export default PrepareToTravelWrapper;
