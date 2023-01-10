import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
