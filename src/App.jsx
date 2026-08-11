import Experience from "./Components/Experience"
import FeatureCard from "./Components/FeatureCard"
import Hero from "./Components/Hero"
import LogoSection from "./Components/LogoSection"
import Navbar from "./Components/Navbar"
import Showcase from "./Components/Showcase"
import Techstack from "./Components/Techstack"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCard />
      <Experience />
      <Techstack />
    </main>
  )
}
export default App