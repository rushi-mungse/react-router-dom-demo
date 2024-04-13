import { NavLink } from "react-router-dom";
import LogoLink from "./links/logo-link";
import NavLinks from "./links/nav-links";

const SiteHeader = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <nav className="container mx-auto flex items-center justify-between">
        <LogoLink />
        <NavLinks />
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full bg-gray text-black font-light tracking-wider hover:bg-primary hover:border-primary hover:text-white border transition-all ${
              isActive && "bg-primary border-primary text-white"
            }`
          }
        >
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default SiteHeader;
