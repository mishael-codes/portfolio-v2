import { Menu } from "react-feather";
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <>
      <div className="relative w-screen h-[50px] flex justify-between items-center pl-3 pr-9">
        <div className="">
          <h2>Mishael Enyi</h2>
        </div>
        <div className="absolute right-12 scale-150 ham-menu"><Menu /></div>
        <ul className="ms-[2000px] bg-red-500 w-full absolute top-0 h-screen flex flex-col items-center justify-center text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
