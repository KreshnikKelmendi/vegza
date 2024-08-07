import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import Header from './components/Header/Header';
import AboutUsPage from './components/Pages/About/AboutUsPage';
import VegzaPage from './components/Pages/VegzaViz/VegzaPage';
import ContactPage from './components/Pages/Contact/ContactPage';
import ProjectsPage from './components/Pages/Project/ProjectsPage';
import ScrollToTop from './components/Pages/Contact/ScrollToTop';
import SinglePageOfProject from './components/Pages/Project/SinglePageOfProject';
import ServicesPage from './components/Pages/Services/ServicesPage';
import Interior from './components/Pages/Interior';
import SinglePageOfVizProjects from './components/Pages/VegzaViz/SinglePageOfVizProjects';


function App() {
  return (
    <>
       <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/vegza-viz" element={<VegzaPage />} />
            <Route path="/vegza-viz/:projectId" element={<SinglePageOfVizProjects />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<SinglePageOfProject />} />
            <Route path="/services/:serviceId" element={<Interior />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>    
    </>
  );
}

export default App;
