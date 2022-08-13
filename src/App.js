import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import DetailsAirplane from "./Components/Details/DetailsAirplane";
import DetailsTourism from "./Components/Details/DetailsTourism";
import DetailsMedical from "./Components/Details/DetailsMedical";
import Html from "./Components/Blogs/Html/Html";
import Css from "./Components/Blogs/Css/Css";
import Js from "./Components/Blogs/Js/Js";
import ReactBlog from "./Components/Blogs/React/React";
import Backend from "./Components/Blogs/Backend/Backend";
import Project1 from "./Components/Projects/Web/Project1/Project";
import Project2 from "./Components/Projects/Web/Project2/Project";
import Project3 from "./Components/Projects/Web/Project3/Project";
import Project4 from "./Components/Projects/Web/Project4/Project";
import Project5 from "./Components/Projects/Web/Project5/Project";
import Project6 from "./Components/Projects/Web/Project6/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          {/* web projects  */}
          <Route path="projects/web-1" element={<Project1 />} />
          <Route path="projects/web-2" element={<Project2 />} />
          <Route path="projects/web-3" element={<Project3 />} />
          <Route path="projects/web-4" element={<Project4 />} />
          <Route path="projects/web-5" element={<Project5 />} />
          <Route path="projects/web-6" element={<Project6 />} />

          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/html" element={<Html />} />
          <Route path="blogs/css" element={<Css />} />
          <Route path="blogs/js" element={<Js />} />
          <Route path="blogs/react" element={<ReactBlog />} />
          <Route path="blogs/backend" element={<Backend />} />
          <Route path="about" element={<About />} />
          <Route path="airplane" element={<DetailsAirplane />} />
          <Route path="tourism" element={<DetailsTourism />} />
          <Route path="medical" element={<DetailsMedical />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
