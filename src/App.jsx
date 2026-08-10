import TempleHero from "./components/TempleHero";
import CoupleReveal from "./components/CoupleReveal";
import GarlandCeremony from "./components/GarlandCeremony";
import WeddingCeremony from "./components/WeddingCeremony";
import Countdown from "./components/Countdown";
import WeddingTimeline from "./components/WeddingTimeline";

function App() {
  return (
    <div className="app">
      {/* =================================================
          SECTION 1 — TEMPLE HERO
      ================================================= */}

      <TempleHero />

      {/* =================================================
          SECTION 2 — COUPLE REVEAL
      ================================================= */}

      <CoupleReveal />

      {/* =================================================
          SECTION 3 — GARLAND CEREMONY
      ================================================= */}

      <GarlandCeremony />

      {/* =================================================
          SECTION 4 — WEDDING DETAILS
      ================================================= */}

      <WeddingCeremony />

      {/* =================================================
          SECTION 5 — COUNTDOWN
      ================================================= */}

      <Countdown />

      {/* =================================================
          SECTION 6 — WEDDING TIMELINE
      ================================================= */}

      <WeddingTimeline />
    </div>
  );
}

export default App;