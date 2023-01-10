import Banner from "../components/Home/Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Outlet />
    </div>
  );
};

export default Home;
