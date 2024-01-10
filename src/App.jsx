import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";
import About from "./components/pages/about";
import Social from "./components/pages/social";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notFound"
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<Social/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;