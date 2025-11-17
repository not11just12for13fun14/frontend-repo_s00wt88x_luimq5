import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Hero />
        <Sections />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
