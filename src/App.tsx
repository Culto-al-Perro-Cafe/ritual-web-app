import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemInsight from "./components/ProblemInsight";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemInsight />
      <FeatureGrid />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = path === "/privacidad" ? <PrivacyPolicy /> : <HomePage />;

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-32">
        {page}
      </main>
      <Footer />
    </>
  );
}

export default App;
