import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import Header from './components/Header/Header';
import AboutUsPage from './components/Pages/About/AboutUsPage';
import VegzaPage from './components/Pages/VegzaViz/VegzaPage';
import ContactPage from './components/Pages/Contact/ContactPage';
import ProjectsPage from './components/Pages/Project/ProjectsPage';


function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/vegza-viz" element={<VegzaPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>    
    </>
  );
}

export default App;
