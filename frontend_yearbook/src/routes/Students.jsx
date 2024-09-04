import Navbar from "../components/Navbar";
import Student from "../components/Student";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

function Students() {
    return (
      <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg='src/assets/gallery-1.png'
        title="Students Portfolio"
        btnClass="hide"
    />
      <Student/>
      <Footer2/>
      </>
    );
  }
  
  export default Students;