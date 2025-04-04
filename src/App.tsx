import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Ads from "./components/Ads";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {
  const [pop, setPop] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 50,
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: darkMode ? "#ff0088" : "#ff008050",
        }}
      />
      <main className=" dark:bg-background-main text-black dark:text-white min-h-screen">
        {/* Header  */}
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        {/* Hero section  */}
        <Hero darkMode={darkMode} setPop={setPop} />

        {/* Access with curve  */}
        <Section1 />
        <Section2 darkMode={darkMode} />
        <article className="relative xl:mt-[250px] ">
          <Section3 setPop={setPop} />
          <Footer />
        </article>

        {pop && <Ads setPop={setPop} />}
      </main>
    </>
  );
}

export default App;
