import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [links] = useState([
    // an array of objects with name, dest and id. where dest is the link endpoint
    { name: "Home", dest: "/", id: 1 },
    { name: "About", dest: "/about", id: 2 },
    { name: "Skills", dest: "/skills", id: 3 },
    { name: "Projects", dest: "/projects", id: 4 },
    { name: "Contact", dest: "/contact", id: 5 },
  ]);

  return (
    <header className=" sticky top-0 z-40 flex justify-between p-3 md:p-5 bg-shadowColor">
      <div className="hidden md:block">
        <h1 className="text-accentColor font-bold font-mono text-lg uppercase lg:text-xl">
          Mishael Enyi
        </h1>
      </div>
      <nav className=" w-full flex justify-evenly text-textColor md:w-1/2 lg:text-xl">
        {/* loop through my array of object with links and assigned each their respctive values using the map method*/}
        {links.map((link) => (
          <NavLink key={link.id} to={link.dest}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
