import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  Aos.init({
    duration: 1800,
    offset: 200,
  });

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portofolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
