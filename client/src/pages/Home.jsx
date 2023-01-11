import Banner from "../components/Home/Banner";
import Result from "../components/Home/Result";
import ResultBottom from "../components/Home/ResultBottom";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Result />
      <ResultBottom />
    </div>
  );
};

export default Home;
