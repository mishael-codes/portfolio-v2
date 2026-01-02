import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [links] = useState([
    { name: "Home", dest: "#home", id: 1 },
    { name: "About", dest: "#about", id: 2 },
    { name: "Skills", dest: "#skills", id: 3 },
    { name: "Projects", dest: "#projects", id: 4 },
    { name: "Contact", dest: "#contact", id: 5 },
  ]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <header className="glass sticky top-0 z-40 flex items-center justify-between p-3 md:p-5 backdrop-blur">
      <div className="flex items-center gap-4">
        <h1 className="text-accentColor font-bold font-mono text-lg uppercase lg:text-xl">
          <a href="#home">Mishael Enyi</a>
        </h1>
      </div>

      <nav
        className="hidden md:flex w-full justify-center text-textColor md:w-1/2 lg:text-xl gap-6"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.dest}
            className="hover:underline underline-offset-2 hover:decoration-accentColor hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-accentColor/50"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="md:hidden" ref={menuRef}>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentColor/50"
          >
            {open ? "✕" : "☰"}
          </button>
          {open && (
            <div
              role="menu"
              className="absolute right-4 mt-2 w-48 bg-background text-textColor rounded shadow-lg p-3"
            >
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.dest}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2 rounded hover:bg-accentColor/10 focus:bg-accentColor/10 focus:outline-none"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Nav;
