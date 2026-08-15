import Header from "./components/Header";
import Footer from "./components/Footer";
import { findRoute } from "./routes";

type AppProps = {
  path?: string;
};

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname;
}

function App({ path = getCurrentPath() }: AppProps) {
  const page = findRoute(path);

  return (
    <>
      <Header path={page.path} />
      <main className="flex-grow pt-24 pb-32">
        {page.render()}
      </main>
      <Footer />
    </>
  );
}

export default App;
