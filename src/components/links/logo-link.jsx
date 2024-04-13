import { Link } from "react-router-dom";
import { IoLogoStencil } from "react-icons/io5";

import siteConfig from "../../config/site-config";

const LogoLink = () => {
  return (
    <Link to="/" className="flex items-center justify-center space-x-4">
      <IoLogoStencil className="size-8 text-primary" />
      <h1 className="font-bold text-2xl text-primary tracking-wider">
        {siteConfig.name}
      </h1>
    </Link>
  );
};
export default LogoLink;
