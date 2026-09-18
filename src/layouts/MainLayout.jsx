import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;