import TempleHero from "./components/TempleHero";
import CoupleReveal from "./components/CoupleReveal";

function App() {
  return (
    <div className="app">
      <TempleHero />

      <CoupleReveal />

      <section className="test-section">
        <p>Our story begins...</p>
      </section>
    </div>
  );
}

export default App;