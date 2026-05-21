'use client';

import { useEffect, useRef } from 'react';

const palette = ['#7dd3fc', '#a78bfa', '#f472b6', '#fde047', '#34d399'];

function getColor(time: number, x: number, y: number) {
  const wave = Math.sin(time * 0.0012 + x * 0.008) + Math.cos(time * 0.001 + y * 0.01);
  const index = Math.abs(Math.floor((wave + 2) * 1.25)) % palette.length;
  return palette[index];
}

export function PixelWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#050505';
      context.fillRect(0, 0, width, height);

      const cellSize = 12;
      for (let y = 0; y < height; y += cellSize) {
        for (let x = 0; x < width; x += cellSize) {
          const color = getColor(time, x, y);
          const wave = Math.sin(time * 0.0015 + x * 0.02) * Math.cos(time * 0.0012 + y * 0.018);
          const alpha = 0.08 + Math.max(0, wave) * 0.22;

          context.fillStyle = color;
          context.globalAlpha = alpha;
          context.fillRect(x, y, cellSize - 1, cellSize - 1);
        }
      }

      context.globalAlpha = 1;

      const rings = 5;
      for (let ring = 0; ring < rings; ring += 1) {
        const radius = Math.min(width, height) * (0.18 + ring * 0.12) + Math.sin(time * 0.0008 + ring) * 24;
        const cx = width * 0.5 + Math.sin(time * 0.0009 + ring) * 34;
        const cy = height * 0.42 + Math.cos(time * 0.001 + ring) * 26;

        const gradient = context.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius);
        gradient.addColorStop(0, 'rgba(255,255,255,0.08)');
        gradient.addColorStop(0.45, 'rgba(255,255,255,0.03)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(cx, cy, radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    animationFrame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 h-screen w-screen pointer-events-none" />;
}