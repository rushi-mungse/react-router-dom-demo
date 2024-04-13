import { NavLink } from "react-router-dom";
import navConfig from "../../config/nav-config";

const NavLinks = () => {
  return (
    <div className="px-8 bg-gray rounded-full border border-black/15">
      <ul className="flex items-center justify-center space-x-2">
        {navConfig.mainNav.map((nav) => (
          <NavLink
            key={nav.title}
            to={nav.href}
            className={({ isActive }) =>
              `px-6 py-2 rounded-full text-gray-500 font-light tracking-wider hover:bg-primary hover:text-white transition-all ${
                isActive && "bg-primary !text-white"
              }`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
