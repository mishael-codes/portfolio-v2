import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center text-textColor">
        <h1 className="text-3xl uppercase font-semibold">Page <span className="text-accentColor">not found</span></h1>
        <div className="w-1/2 mt-9 text-center">
          Sorry, but the page you're looking for does not exist. Please double
          check the url, or just head back home by clicking on{" "}
          <NavLink to="/" className="text-accentColor">this link</NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
