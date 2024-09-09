import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Hero from "../components/Hero";
import Footer2 from "../components/Footer2";

function Projects() {
    return (
      <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg='src/assets/gallery-1.png'
        title="Projects Portfolio"
        btnClass="hide"/>
      <Project/>
      <Footer2/>
      </>
    );
  }
  
  export default Projects;