import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { AcademicBackground } from "./components/AcademicBackground";
import { Certifications } from "./components/Certifications";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences />
      <AcademicBackground />
      <Projects />
      <Skills />      
      <Certifications />   
      
      
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
