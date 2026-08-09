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
    </main>
  )
}
export default App