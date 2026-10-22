import { useEffect, useRef, useState } from "react";

const links = [
  { name: "Home", dest: "#home" },
  { name: "About", dest: "#about" },
  { name: "Skills", dest: "#skills" },
  { name: "Work", dest: "#projects" },
  { name: "Contact", dest: "#contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex w-[min(100%-2rem,76rem)] items-center justify-between py-4">
        <a href="#home" className="font-mono text-sm font-medium tracking-widest text-yellow-300">
          Mishael Enyi
        </a>
        <nav className="site-nav hidden gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => <a key={link.dest} href={link.dest}>{link.name}</a>)}
        </nav>
        <div className="relative md:hidden" ref={menuRef}>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="border border-white/20 px-3 py-2 font-mono text-xs uppercase text-white"
          >
            {open ? "Close" : "Menu"}
          </button>
          {open && (
            <nav className="site-nav absolute right-0 top-12 flex w-48 flex-col gap-1 border border-white/15 bg-black p-3 shadow-2xl" aria-label="Mobile navigation">
              {links.map((link) => (
                <a key={link.dest} href={link.dest} onClick={() => setOpen(false)} className="p-3">
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
