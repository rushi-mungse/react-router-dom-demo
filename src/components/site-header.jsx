import LogoLink from "./links/logo-link";
import NavLinks from "./links/nav-links";

const SiteHeader = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <nav className="container mx-auto flex items-center justify-between">
        <LogoLink />
        <NavLinks />
        <button className="px-6 py-2 rounded-full bg-secondary text-white font-light tracking-wider hover:bg-secondary/90 transition-all">
          Book Now
        </button>
      </nav>
    </div>
  );
};

export default SiteHeader;
