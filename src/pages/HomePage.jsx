//Components
import HeroSection from "./../components/sections/HeroSection";
import PassionAndFocusSection from "./../components/sections/PassionAndFocusSection";
import ShowcaseSection from "./../components/sections/ShowcaseSection";
import SkillsSection from "./../components/sections/SkillsSection";
import Footer from "./../components/sections/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection title='Reign Westry'/>
      <PassionAndFocusSection />
      <ShowcaseSection />
      <SkillsSection />
      <Footer />
    </>
  );
}
export default App;

