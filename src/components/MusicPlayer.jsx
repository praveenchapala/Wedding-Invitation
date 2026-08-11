import { useEffect, useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const startMusic = async () => {
      try {
        await audio.play();
      } catch {
        // Browser blocked autoplay.
        // Start automatically on the first user interaction.
      }
    };

    const handleFirstInteraction = () => {
      audio.play().catch(() => {});
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    // Try to start immediately when the website opens.
    startMusic();

    // Fallback for browsers that block autoplay.
    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/wedding-invitation.mp3"
      loop
      preload="auto"
    />
  );
}

export default MusicPlayer;