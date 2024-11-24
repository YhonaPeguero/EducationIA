import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import GettingStarted from './components/GettingStarted'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <GettingStarted />
      <FeaturesGrid />
      <Footer />
    </div>
  )
}

export default App
