import { Link } from "react-router-dom";
import logoblack from "../../assets/logoblack.png";

const Header = () => {
  return (
    <header className="container headerview flex items-center justify-between">
      <Link to="/">
        <img
          src={logoblack}
          alt=""
          className="w-[130px] md:w-[145px] lg:w-[170] xl:w-[185px] cursor-pointer"
        />
      </Link>
      <a
        href="mailto:contact@famousstar.com"
        style={{ letterSpacing: "1.2px" }}
        className="border border-black bg-black text-white font-medium px-5 py-1.5 rounded-lg text-lg hidden lg:block"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
