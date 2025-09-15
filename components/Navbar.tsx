"use client";
import { useState, useRef } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { IconMusic, IconPlayerPause } from "@tabler/icons-react";

export default function Navbar() {
  const dockItems = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#About" },
    { title: "Projects", href: "#Projects" },
    { title: "Skills", href: "#Skills" },
    { title: "Contact", href: "#Contact" },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black dark:bg-black shadow-md z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2">
      
        <h1 className="text-xl font-bold text-slate-600 dark:text-brown">Ashutosh</h1>

    
        <div className="flex items-center gap-4">
       
          <FloatingDock
            items={dockItems}
            desktopClassName="gap-4"
            mobileClassName="gap-2"
          />

          {isPlaying && (
            <div className="flex space-x-1 mr-2">
              <span className="w-1 h-4 bg-green-400 animate-pulse"></span>
              <span className="w-1 h-6 bg-green-500 animate-bounce"></span>
              <span className="w-1 h-3 bg-green-400 animate-pulse"></span>
            </div>
          )}

      
          <button
            onClick={toggleMusic}
            className="p-2 rounded-full bg-gray-500 hover:bg-gray-400 transition cursor-pointer"
          >
            {isPlaying ? <IconPlayerPause size={22} /> : <IconMusic size={22} />}
          </button>
        </div>

      
        <audio ref={audioRef} src="/music.mp3" loop />
      </div>
    </nav>
  );
}
