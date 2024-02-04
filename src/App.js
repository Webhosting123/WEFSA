import "./App.css";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderSection from "./components/navebar/navebar";
import Footer from "./components/footer/footer";
import ThemeContext from "./components/contexts/themecontexts";
import { HashRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0d0620";
    } else {
      document.body.style.backgroundColor = "#fff";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme]);

  return (
    <HashRouter>
      <section>
        <HeaderSection />
        <Main />
        <Footer />
      </section>
    </HashRouter>
  );
}

export default App;
