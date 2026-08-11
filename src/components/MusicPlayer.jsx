import { useEffect, useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;

    let started = false;

    const playMusic = async () => {
      if (started) return;

      try {
        await audio.play();

        started = true;

        removeInteractionListeners();

        console.log("Wedding music started");
      } catch (error) {
        console.log(
          "Autoplay blocked. Waiting for user interaction."
        );
      }
    };

    const handleInteraction = () => {
      playMusic();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener(
        "pointerdown",
        handleInteraction,
        true
      );

      window.removeEventListener(
        "touchend",
        handleInteraction,
        true
      );

      window.removeEventListener(
        "click",
        handleInteraction,
        true
      );
    };

    /*
     * Try autoplay immediately.
     */
    playMusic();

    /*
     * Mobile fallback.
     *
     * Capture phase is important because it catches
     * the user's first interaction even if another
     * element handles the event.
     */
    window.addEventListener(
      "pointerdown",
      handleInteraction,
      true
    );

    window.addEventListener(
      "touchend",
      handleInteraction,
      true
    );

    window.addEventListener(
      "click",
      handleInteraction,
      true
    );

    return () => {
      removeInteractionListeners();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/wedding-invitation.mp3"
      preload="auto"
      loop
      playsInline
    />
  );
}

export default MusicPlayer;