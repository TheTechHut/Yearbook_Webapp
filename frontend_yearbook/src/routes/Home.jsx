
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Title from '../components/Title';
import { About } from '../components/About';
import Campus from '../components/Campus';
import Carousel from '../components/Carousel';
import Footer2 from '../components/Footer2';

function Home() {
  return (
    <>
    <Navbar />
    <Hero
      cName="hero"
      heroImg="src\assets\hero.png"
      title="Where Every Smile Tells a Story"
      text="Turning Today’s Memories into Tomorrow’s Treasures"
      buttonText="Make your own"
      url="/"
      btnClass="show"
    />
    <div className="container">
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Featured Portfolios" title="What Our MVPs Say"/>
      <Carousel />
    </div>
    <Footer2/>
    
    

    
    </>
    
  );
}

export default Home;
