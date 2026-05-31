import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, SkipForward } from 'lucide-react';
import amritaLogo from '@/assets/logo.png';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: (() => void) | undefined;
    YT: any;
  }
}

interface Track {
  id: string;
  title: string;
  artist: string;
}

export function AudioPlayer() {
  const tracks: Track[] = [
    {
      id: 'uK5LolHVZ0w',
      title: 'Oh My Friend',
      artist: 'Happy Days Anthem',
    },
    {
      id: '6Xee5AJza2w',
      title: 'Arerey Arerey',
      artist: 'Happy Days Melodic',
    }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50); // 0-100 for YouTube
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSdkReady, setIsSdkReady] = useState(false);
  
  const playerRef = useRef<any>(null);
  const currentTrackIndexRef = useRef(0);

  // Sync ref to avoid stale state in YouTube callback closures
  useEffect(() => {
    currentTrackIndexRef.current = currentTrackIndex;
  }, [currentTrackIndex]);

  useEffect(() => {
    // 1. Declare local initialization function
    const initPlayer = () => {
      if (playerRef.current) return; // avoid duplicate init
      
      try {
        playerRef.current = new window.YT.Player('yt-player-frame', {
          height: '0',
          width: '0',
          videoId: tracks[currentTrackIndexRef.current].id, 
          playerVars: {
            autoplay: 1, // Attempt native autoplay
            controls: 0,
            disablekb: 1,
            fs: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1
          },
          events: {
            onReady: (event: any) => {
              setIsSdkReady(true);
              setDuration(event.target.getDuration() || 292);
              event.target.setVolume(volume);
            },
            onStateChange: (event: any) => {
              // YT.PlayerState: PLAYING = 1, PAUSED = 2, ENDED = 0
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Queue: Auto-play the next song!
                setIsPlaying(false);
                const nextIndex = (currentTrackIndexRef.current + 1) % tracks.length;
                setCurrentTrackIndex(nextIndex);
                event.target.loadVideoById(tracks[nextIndex].id);
              }
            }
          }
        });
      } catch (err) {
        console.error("Error initializing YT Player", err);
      }
    };

    // 2. Load YouTube API script if not loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
      
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // Autoplay trigger on first user interaction to bypass strict browser policies
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (playerRef.current && isSdkReady && !isPlaying) {
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch (err) {
          // ignore autoplay block
        }
      }
      // Remove event listeners immediately after trigger
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };

    if (isSdkReady && !isPlaying) {
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);
      document.addEventListener('scroll', handleFirstInteraction);
    }

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isSdkReady, isPlaying]);

  // Timer loop to track exact song playback time
  useEffect(() => {
    let timer: any;
    if (isPlaying && playerRef.current && isSdkReady) {
      timer = setInterval(() => {
        try {
          if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
            const current = playerRef.current.getCurrentTime();
            const dur = playerRef.current.getDuration() || 1;
            setCurrentTime(current);
            setDuration(dur);
            setProgress((current / dur) * 100);
          }
        } catch (err) {
          // Silent catch
        }
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isSdkReady]);

  const handlePlayPause = () => {
    if (!playerRef.current || !isSdkReady) return;
    
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Play/pause command failed", err);
    }
  };

  const handleTrackSwitch = () => {
    if (!playerRef.current || !isSdkReady) return;
    
    try {
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      setCurrentTrackIndex(nextIndex);
      playerRef.current.loadVideoById(tracks[nextIndex].id);
      setIsPlaying(true);
    } catch (err) {
      console.error("Track switch command failed", err);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current || !isSdkReady) return;
    try {
      const value = parseFloat(e.target.value);
      const newTime = (value / 100) * duration;
      playerRef.current.seekTo(newTime, true);
      setProgress(value);
      setCurrentTime(newTime);
    } catch (err) {
      // ignore
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !isSdkReady) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (err) {
      // ignore
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const activeTrack = tracks[currentTrackIndex];

  return (
    <div className="fixed bottom-6 left-6 max-sm:left-4 max-sm:right-4 max-sm:bottom-4 z-[999] select-none">
      {/* Hidden YouTube Iframe Player Hook (placed off-screen to allow API to initialize correctly) */}
      <div id="yt-player-frame" className="pointer-events-none absolute w-0 h-0 opacity-0" style={{ left: '-9999px', top: '-9999px' }} />

      {/* Main Glassmorphic Music Player Capsule */}
      <div 
        className="liquid-glass rounded-full px-4 py-3 flex items-center justify-between sm:justify-start gap-3.5 shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-white/20 dark:border-white/10 max-w-sm max-sm:max-w-none transition-all duration-500 hover:scale-[1.03]"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Spinning Vinyl Record of Logo */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <div 
            className={`w-full h-full rounded-full bg-slate-950 p-1 border-2 border-gold/40 shadow-inner flex items-center justify-center overflow-hidden ${
              isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''
            }`}
          >
            <img 
              src={amritaLogo} 
              alt="Logo record" 
              className="w-full h-full object-contain rounded-full brightness-110 pointer-events-none"
            />
            {/* Vinyl spindle center hole */}
            <div className="absolute inset-0 m-auto w-3 h-3 bg-slate-950 rounded-full border border-gold/50 shadow-inner" />
          </div>
          {/* Glowing pulse indicator */}
          {isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-maroon"></span>
            </span>
          )}
        </div>

        {/* Info & Controls Wrapper */}
        <div className="flex flex-col gap-1 min-w-[140px] sm:min-w-[180px]">
          {/* Song title and Movie context */}
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-black tracking-wide text-slate-800 dark:text-slate-100 truncate">
              {activeTrack.title}
            </span>
            <span className="text-[9px] font-bold text-maroon dark:text-gold tracking-widest uppercase flex items-center gap-1">
              <Music className="w-2.5 h-2.5 text-maroon dark:text-gold" />
              {activeTrack.artist}
            </span>
          </div>

          {/* Mini Interactive Soundwaves */}
          <div className="flex items-end gap-0.5 h-3 mt-0.5 px-0.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => {
              const delay = bar * 0.1;
              const height = isPlaying 
                ? [6, 12, 8, 14, 10, 4, 12, 10, 6, 14, 8, 4][bar % 12] 
                : 2;
              return (
                <div 
                  key={bar}
                  className="w-1 bg-maroon dark:bg-gold rounded-full transition-all duration-300"
                  style={{ 
                    height: `${height}px`,
                    animation: isPlaying ? `float 1.2s ease-in-out infinite alternate` : 'none',
                    animationDelay: `${delay}s`
                  }}
                />
              );
            })}
          </div>

          {/* Time & Progress slider */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[8px] font-extrabold text-slate-500 dark:text-slate-400">
              {formatTime(currentTime)}
            </span>
            <input 
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="flex-grow h-1 rounded-full bg-slate-200 dark:bg-slate-800 appearance-none cursor-pointer accent-maroon dark:accent-gold"
              style={{
                background: `linear-gradient(to right, #8B1538 0%, #8B1538 ${progress}%, #E2E8F0 ${progress}%, #E2E8F0 100%)`
              }}
            />
            <span className="text-[8px] font-extrabold text-slate-500 dark:text-slate-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Button Panel */}
        <div className="flex items-center gap-1 border-l border-slate-900/10 dark:border-white/10 pl-2">
          {/* Play/Pause Circle FAB */}
          <button
            onClick={handlePlayPause}
            className="w-8.5 h-8.5 rounded-full bg-gradient-to-r from-maroon to-gold dark:from-maroon dark:to-gold hover:scale-[1.08] active:scale-[0.96] flex items-center justify-center text-white shadow shadow-maroon/20 hover:shadow-lg transition-all cursor-pointer"
            aria-label={isPlaying ? "Pause music" : "Play music"}
            disabled={!isSdkReady}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-white" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-white translate-x-[1px]" />
            )}
          </button>

          {/* Toggle/Switch Song Button */}
          <button
            onClick={handleTrackSwitch}
            className="w-8.5 h-8.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-950/10 dark:border-white/10 hover:scale-[1.08] active:scale-[0.96] flex items-center justify-center text-slate-700 dark:text-gold-hover transition-all cursor-pointer"
            aria-label="Switch song"
            disabled={!isSdkReady}
          >
            <SkipForward className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mute/Unmute toggle */}
          <button
            onClick={toggleMute}
            className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all cursor-pointer"
            aria-label={isMuted ? "Unmute" : "Mute"}
            disabled={!isSdkReady}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Floating explanatory Tooltip */}
      {showTooltip && (
        <div className="absolute -top-10 left-0 bg-slate-900 dark:bg-slate-950 text-white dark:text-gold text-[9px] font-extrabold px-3 py-1.5 rounded-xl shadow-lg border border-white/10 pointer-events-none whitespace-nowrap animate-bounce">
          {isSdkReady 
            ? `⏭️ Next: ${tracks[(currentTrackIndex + 1) % tracks.length].title}` 
            : "⌛ Loading audio player..."}
        </div>
      )}
    </div>
  );
}
