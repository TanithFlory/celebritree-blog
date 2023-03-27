import Home from "./components/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArticlePreview from "./components/Articles/ArticlePreview/ArticlePreview";
import Footer from "./components/Footer/Footer";
import Pagebreak from "./components/UI/Pagebreak";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="articles/:tag/:title" element={<ArticlePreview />} />
      </Routes>
      <Pagebreak margin="3rem 0"/>
      <Footer />
    </>
  );
}

export default App;
