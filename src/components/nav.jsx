import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between p-3 md:p-6 bg-shadowColor relative">
      <div className="hidden md:block">
        <h1 className="text-accentColor font-bold font-mono text-lg uppercase lg:text-2xl">
          Mishael Enyi
        </h1>
      </div>
      <nav className=" w-full flex justify-evenly text-textColor md:w-1/2 lg:text-2xl">
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
