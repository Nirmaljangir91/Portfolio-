import Navbar from "./component/Navbar";
import Hero from "./component/HeroSection";
import About from "./component/About"
import SkillsMarquee from "./component/SkillsMarquee"
import  Projects from "./component/Project"
import  Contact from "./component/contact"
import Footer from "./component/footer"
function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <SkillsMarquee />
      <Projects />
      <SkillsMarquee />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;