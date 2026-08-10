import TempleHero from "./components/TempleHero";
import CoupleReveal from "./components/CoupleReveal";
import GarlandCeremony from "./components/GarlandCeremony";
import WeddingCeremony from "./components/WeddingCeremony";
import Countdown from "./components/Countdown";
import FamilyBlessings from "./components/FamilyBlessings";
import RSVP from "./components/RSVP";
import CoupleMemories from "./components/CoupleMemories";
import VenueLocation from "./components/VenueLocation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

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
          SECTION 9 — VENUE LOCATION
      ================================================= */}

      <VenueLocation />

      {/* =================================================
          SECTION 10 — FINAL FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default App;