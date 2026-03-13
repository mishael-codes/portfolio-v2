import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import ThankYou from "./components/pages/thankyou";
import NotFound from "./components/pages/notFound";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const MainLayout = () => (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content" className="w-full">
        <section id="home" data-reveal className="min-h-screen">
          <Home />
        </section>

        <section id="about" data-reveal className="py-12">
          <About />
        </section>

        <section id="skills" data-reveal className="py-12">
          <Skills />
        </section>

        <section id="projects" data-reveal className="py-12">
          <Projects />
        </section>

        <section id="contact" data-reveal className="py-12">
          <Contact />
        </section>
      </main>
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
