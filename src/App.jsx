import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notFound";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import ThankYou from "./components/pages/thankyou";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const MainLayout = () => (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">
        <section id="home" data-reveal><Home /></section>
        <section id="about" data-reveal><About /></section>
        <section id="skills" data-reveal><Skills /></section>
        <section id="projects" data-reveal><Projects /></section>
        <section id="contact" data-reveal><Contact /></section>
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
