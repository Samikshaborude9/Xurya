
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
function App() {


  return (
    <>
      <Header/>
      
      <main className="pt-[72px]"> {/* Adjust this value if your header height changes */}
        <Hero />
      </main>
      
    </>
  )
}

export default App
