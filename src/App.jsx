import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import GettingStarted from './components/GettingStarted'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <GettingStarted />
      <Footer />
    </div>
  )
}

export default App
