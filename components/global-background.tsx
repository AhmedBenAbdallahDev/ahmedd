'use client';

import { useEffect, useState } from 'react';
import { DitheringShader } from '@/components/ui/dithering-shader';

export function GlobalBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] opacity-60 pointer-events-none">
      <DitheringShader
        width={dimensions.width}
        height={dimensions.height}
        colorBack="#000000"
        colorFront="#1a1a1a"
        shape="swirl"
        type="8x8"
        pxSize={2}
        speed={0.3}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
      />
    </div>
  );
}
