import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <div className="px-8 bg-[#f5f4f5] rounded-full border">
      <ul className="flex items-center justify-center space-x-2">
        <Link
          to="/"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/" && "bg-secondary !text-white"
          }`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/about" && "bg-secondary !text-white"
          }`}
        >
          About
        </Link>

        <Link
          to="/portfolio"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/portfolio" && "bg-secondary !text-white"
          }`}
        >
          Portfolio
        </Link>

        <Link
          to="/services"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/services" && "bg-secondary !text-white"
          }`}
        >
          Services
        </Link>

        <Link
          to="/career"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/career" && "bg-secondary !text-white"
          }`}
        >
          Career
        </Link>

        <Link
          to="/pricing"
          className={`px-6 py-2 rounded-full text-gray-500 font-light tracking-wider ${
            pathname === "/pricing" && "bg-secondary !text-white"
          }`}
        >
          Pricing
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
