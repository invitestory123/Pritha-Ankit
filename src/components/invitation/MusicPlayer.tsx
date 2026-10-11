import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Pause, Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { invitation } from "@/content/invitation";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const videoId = invitation.music.videoId;

  // Listen for trigger from IntroGate wax seal tap
  useEffect(() => {
    const handleAutoPlay = () => {
      startPlaying();
    };
    window.addEventListener("wedding:play-music", handleAutoPlay);
    return () => window.removeEventListener("wedding:play-music", handleAutoPlay);
  }, [playerReady]);

  const sendCommand = (func: "playVideo" | "pauseVideo" | "unMute") => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: func,
          args: [],
        }),
        "*"
      );
    }
  };

  const startPlaying = () => {
    sendCommand("unMute");
    sendCommand("playVideo");
    setIsPlaying(true);
  };

  const pausePlaying = () => {
    sendCommand("pauseVideo");
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pausePlaying();
    } else {
      startPlaying();
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe for background music playback */}
      <div className="pointer-events-none fixed -top-96 -left-96 h-1 w-1 opacity-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          title="Wedding Song Background Player"
          width="100"
          height="100"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}&loop=1&playlist=${videoId}`}
          allow="autoplay; encrypted-media"
          onLoad={() => setPlayerReady(true)}
        />
      </div>

      {/* Floating Aesthetic Music Control Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
      >
        <div className="glass-plate flex items-center rounded-full p-1.5 shadow-lg backdrop-blur-md transition-all duration-300">
          {/* Spinning Vinyl Disc Button */}
          <motion.button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
          >
            {/* Rotating music disc styling */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                duration: 3.5,
                ease: "linear",
              }}
              className="absolute inset-1 rounded-full border border-gold/40 flex items-center justify-center"
            >
              <div className="h-2 w-2 rounded-full bg-gold" />
            </motion.div>

            {isPlaying ? (
              <Pause size={16} className="relative z-10 text-primary-foreground" />
            ) : (
              <Play size={16} className="relative z-10 translate-x-0.5 text-primary-foreground" />
            )}
          </motion.button>

          {/* Song Info & Controls */}
          <div
            className="flex cursor-pointer items-center px-3 py-1"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <div className="flex flex-col text-left">
              <span className="font-sans text-[0.55rem] tracking-[0.22em] text-gold-deep uppercase">
                {isPlaying ? "Now Playing" : "Wedding Melody"}
              </span>
              <span className="max-w-[140px] truncate font-display text-xs text-primary sm:max-w-[190px]">
                {invitation.music.title}
              </span>
            </div>

            {/* Audio Waveform Indicators */}
            {isPlaying && (
              <div className="ml-2.5 flex items-end gap-0.5 h-3">
                <motion.div
                  animate={{ height: ["30%", "100%", "40%"] }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                  className="w-0.5 rounded-full bg-gold"
                />
                <motion.div
                  animate={{ height: ["60%", "20%", "90%"] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  className="w-0.5 rounded-full bg-gold"
                />
                <motion.div
                  animate={{ height: ["20%", "85%", "35%"] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                  className="w-0.5 rounded-full bg-gold"
                />
              </div>
            )}
          </div>

          {/* External YouTube link shortcut */}
          <a
            href={invitation.music.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open song in YouTube"
            className="flex h-8 w-8 items-center justify-center rounded-full text-primary/70 hover:text-primary transition-colors hover:bg-gold/15"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </motion.div>
    </>
  );
}
