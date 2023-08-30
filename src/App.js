import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/scrollToTop";



function App() {
  return (
    <div className="App">

      <Router>
        {/*to fix bug with scroll - use utilit from documentation  https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top*/}
        <ScrollToTop/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
