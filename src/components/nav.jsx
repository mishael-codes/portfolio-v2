import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between p-6 bg-shadowColor opacity-80">
      <div>
        <h1 className="text-accentColor font-bold font-mono text-lg uppercase lg:text-2xl">Mishael Enyi</h1>
      </div>
      <nav className=" w-1/2 flex justify-evenly text-textColor lg:text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
