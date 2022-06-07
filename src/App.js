import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Comphonents/Home/Home";
import Header from "./Comphonents/Header/Header";
import Projects from "./Comphonents/Projects/Projects";
import Contact from "./Comphonents/Contact/Contact";
import Blogs from "./Comphonents/Blogs/Blogs";
import About from "./Comphonents/About/About";
import DetailsAirplane from "./Comphonents/Details/DetailsAirplane";
import DetailsTourism from "./Comphonents/Details/DetailsTourism";
import DetailsMedical from "./Comphonents/Details/DetailsMedical";
import Html from "./Comphonents/Blogs/Html/Html";
import Css from "./Comphonents/Blogs/Css/Css";
import Js from "./Comphonents/Blogs/Js/Js";
import ReactBlog from "./Comphonents/Blogs/React/React";
import Backend from "./Comphonents/Blogs/Backend/Backend";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/html" element={<Html />} />
          <Route path="/blogs/css" element={<Css />} />
          <Route path="/blogs/js" element={<Js />} />
          <Route path="/blogs/react" element={<ReactBlog />} />
          <Route path="/blogs/backend" element={<Backend />} />
          <Route path="/about" element={<About />} />
          <Route path="/airplane" element={<DetailsAirplane />} />
          <Route path="/tourism" element={<DetailsTourism />} />
          <Route path="/medical" element={<DetailsMedical />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
