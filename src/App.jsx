import TempleHero from "./components/TempleHero";
import CoupleReveal from "./components/CoupleReveal";
import GarlandCeremony from "./components/GarlandCeremony";

function App() {
  return (
    <div className="app">
      {/* =====================================================
          SECTION 1 — TEMPLE HERO
      ===================================================== */}
      <TempleHero />

      {/* =====================================================
          SECTION 2 — COUPLE REVEAL
      ===================================================== */}
      <CoupleReveal />

      {/* =====================================================
          SECTION 3 — GARLAND CEREMONY
      ===================================================== */}
      <GarlandCeremony />
    </div>
  );
}

export default App;