import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className=" sticky top-0 z-40 flex justify-between p-3 md:p-5 bg-shadowColor">
      <div className="hidden md:block">
        <h1 className="text-accentColor font-bold font-mono text-lg uppercase lg:text-xl">
          Mishael Enyi
        </h1>
      </div>
      <nav className=" w-full flex justify-evenly text-textColor md:w-1/2 lg:text-xl">
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
