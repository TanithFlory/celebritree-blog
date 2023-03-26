import Home from "./components/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArticlePreview from "./components/Articles/ArticlePreview/ArticlePreview";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="articles/:title" element={<ArticlePreview />} />
      </Routes>
    </>
  );
}

export default App;
