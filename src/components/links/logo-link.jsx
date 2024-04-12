import { IoLogoStencil } from "react-icons/io5";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <Link to="/" className="flex items-center justify-center space-x-4">
      <IoLogoStencil className="size-6" />
      <h1 className="font-bold text-xl text-black tracking-wider">Pullzify</h1>
    </Link>
  );
};
export default LogoLink;
