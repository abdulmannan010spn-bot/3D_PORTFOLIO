import Experience from "./Components/Experience"
import FeatureCard from "./Components/FeatureCard"
import Hero from "./Components/Hero"
import LogoSection from "./Components/LogoSection"
import Navbar from "./Components/Navbar"
import Showcase from "./Components/Showcase"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCard />
      <Experience />
    </main>
  )
}
export default App