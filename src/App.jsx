import TempleHero from "./components/TempleHero";
import CoupleReveal from "./components/CoupleReveal";
import GarlandCeremony from "./components/GarlandCeremony";
import WeddingCeremony from "./components/WeddingCeremony";
import Countdown from "./components/Countdown";
import FamilyBlessings from "./components/FamilyBlessings";
import RSVP from "./components/RSVP";
import CoupleMemories from "./components/CoupleMemories";
import WeddingCardReveal from "./components/WeddingCardReveal";
import VenueLocation from "./components/VenueLocation";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div>

      {/* =================================================
          WEDDING MUSIC
      ================================================= */}

      <MusicPlayer />

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
          SECTION 6 — FAMILY BLESSINGS
      ================================================= */}

      <FamilyBlessings />

      {/* =================================================
          SECTION 7 — RSVP
      ================================================= */}

      <RSVP />

      {/* =================================================
          SECTION 8 — COUPLE MEMORIES
      ================================================= */}

      <CoupleMemories />

      {/* =================================================
          SECTION 9 — WEDDING CARD REVEAL
      ================================================= */}

      <WeddingCardReveal />

      {/* =================================================
          SECTION 11 — VENUE LOCATION
      ================================================= */}

      <VenueLocation />

      {/* =================================================
          SECTION 12 — FINAL FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default App;