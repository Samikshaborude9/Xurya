
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/trustedby'
import FeaturesGrid from './components/FeaturesGrid'
import TrustedService from './components/TrustedServices'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Header/>
      
      <main className="pt-[72px]"> {/* Adjust this value if your header height changes */}
        <Hero />
        <TrustedBy/>
        <FeaturesGrid/>
        <TrustedService/>
        <TestimonialsSection/>
        <Footer/>
      </main>
      
    </>
  )
}

export default App
