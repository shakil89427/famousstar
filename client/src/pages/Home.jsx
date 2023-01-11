import Banner from "../components/Home/Banner";
import { Outlet } from "react-router-dom";
import ResultBottom from "../components/Home/ResultBottom";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Outlet />
      <ResultBottom/>
    </div>
  );
};

export default Home;
