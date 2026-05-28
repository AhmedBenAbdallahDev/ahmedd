"use client";

import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Copy } from "lucide-react";

// Types
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

interface DockIcon {
  src: string;
  alt: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

// Glass Effect Wrapper Component
const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.25)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
const GlassDock: React.FC<{ icons: DockIcon[]; href?: string }> = ({
  icons,
  href,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col items-center">
      <div 
        className="mb-8 absolute -top-10 flex items-end justify-center transition-opacity duration-300 pointer-events-none"
        style={{ opacity: hoveredIndex !== null ? 1 : 0 }}
      >
        <span className="text-white text-sm font-medium tracking-wide drop-shadow-md">
          {hoveredIndex !== null ? icons[hoveredIndex].alt : ""}
        </span>
      </div>
      <GlassEffect
        href={href}
        className="rounded-3xl p-2.5 hover:p-3.5 hover:rounded-4xl"
      >
        <div className="flex items-center justify-center gap-1.5 rounded-3xl p-2.5 py-0 px-1 overflow-hidden">
          {icons.map((icon, index) => (
            <div 
              key={index}
              className="relative p-0.5"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={`w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0 p-1 transition-all duration-700 hover:scale-110 cursor-pointer ${icon.className || ""}`}
                style={{
                  transformOrigin: "center center",
                  transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                  ...icon.style
                }}
                onClick={icon.onClick}
              />
            </div>
          ))}
        </div>
      </GlassEffect>
    </div>
  );
};

// Button Component
const GlassButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href,
}) => (
  <GlassEffect
    href={href}
    className="rounded-3xl px-8 py-4 hover:px-9 hover:py-5 hover:rounded-4xl overflow-hidden"
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
      }}
    >
      {children}
    </div>
  </GlassEffect>
);

// SVG Filter Component
const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
// Background Video Component for crossfade looping
const LoopingVideo = ({ src, poster }: { src: string; poster: string }) => {
  const [activeVideo, setActiveVideo] = useState<'a' | 'b'>('a');
  const videoRefA = React.useRef<HTMLVideoElement>(null);
  const videoRefB = React.useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const fadePoint = video.duration - 2;

    if (video.currentTime >= fadePoint && activeVideo === (video === videoRefA.current ? 'a' : 'b')) {
      const otherVideo = video === videoRefA.current ? videoRefB.current : videoRefA.current;
      if (otherVideo) {
        otherVideo.currentTime = 0;
        otherVideo.play();
        setActiveVideo(video === videoRefA.current ? 'b' : 'a');
      }
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <video
        ref={videoRefA}
        onTimeUpdate={handleTimeUpdate}
        autoPlay
        muted
        playsInline
        className={`absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-[2000ms] ${
          activeVideo === 'a' ? 'opacity-100' : 'opacity-0'
        }`}
        poster={poster}
      >
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
      <video
        ref={videoRefB}
        onTimeUpdate={handleTimeUpdate}
        muted
        playsInline
        className={`absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-[2000ms] ${
          activeVideo === 'b' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};

// Main Component
export const Component = () => {
  const dockIcons: DockIcon[] = [
    {
      src: "/icons/claude.png", // This is actually the itch icon
      alt: "carthagea.itch.io",
      onClick: () => window.open("https://carthagea.itch.io/", "_blank")
    },
    {
      src: "/icons/linkedin-v2.png",
      alt: "LinkedIn",
      onClick: () => window.open("https://www.linkedin.com/in/ahmed-ben-abdallah-dev/", "_blank")
    },
    {
      src: "/icons/chatgpt.png",
      alt: "Chatgpt",
    },
    {
      src: "/icons/maps.png",
      alt: "Maps",
    },
    {
      src: "/icons/safari.png",
      alt: "Safari",
    },
    {
      src: "/icons/steam.png",
      alt: "Steam",
    },
  ];

  return (
    <div className="min-h-screen h-full flex items-center justify-center font-light relative overflow-hidden w-full bg-black">
      <Toaster position="top-center" richColors />
      
      <LoopingVideo 
        src="https://moewalls.com/wp-content/uploads/preview/2026/sunlight-grass-preview.webm"
        poster="https://moewalls.com/wp-content/uploads/preview/2026/sunlight-grass-thumbnail.jpg"
      />

      <GlassFilter />

      <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full">
        <GlassDock icons={dockIcons} href="https://x.com/notsurajgaud" />

        <div 
          onClick={() => {
            navigator.clipboard.writeText("AhmedDev@email.com");
            toast.success("Copied to clipboard!");
          }}
        >
          <GlassButton className="px-6 py-3">
            <div className="text-lg text-white flex items-center gap-3">
              <p>AhmedDev@email.com</p>
              <Copy size={16} className="opacity-60" />
            </div>
          </GlassButton>
        </div>
      </div>     
    </div>
  );
}
