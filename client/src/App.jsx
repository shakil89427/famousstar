import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
