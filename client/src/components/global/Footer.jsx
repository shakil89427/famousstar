import { useMemo } from "react";
import { Link } from "react-router-dom";
import logowhite from "../../assets/logowhite.png";

const Footer = () => {
  const routes = useMemo(() => {
    return [
      { title: "Home", path: "/" },
      { title: "Contact", path: "/" },
      { title: "About", path: "/" },
      { title: "Terms", path: "/" },
      { title: "Blogs", path: "/" },
      { title: "Privacy", path: "/" },
    ];
  }, []);

  return (
    <footer className="py-12 bg-black mt-28 text-white">
      <div className="container">
        <div className="grid grid-cols-2 w-fit mx-auto gap-5 font-medium">
          {routes.map((route) => (
            <Link to={route.path} key={route.title}>
              {route.title}
            </Link>
          ))}
        </div>
        <div className="container border-t mt-12 flex flex-col items-center justify-center pt-10">
          <Link to="/">
            <img
              src={logowhite}
              alt=""
              className="w-[130px] md:w-[145px] lg:w-[170] xl:w-[185px] cursor-pointer"
            />
          </Link>
          <p className="text-sm">@FamousStar 2023 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
