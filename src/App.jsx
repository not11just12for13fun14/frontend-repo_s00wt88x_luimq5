import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen aj-bg-gradient text-[color:var(--aj-ivory)]">
        <Navbar />
        <Hero />
        <Sections />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
