import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemInsight from "./components/ProblemInsight";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-32">
        <Hero />
        <ProblemInsight />
        <FeatureGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
