import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased
    selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed left-0 top-0 -z-10 h-full w-full bg-[#0a0a0a]'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
        rgba(88, 28, 135, 0.3),
        rgba(124, 58, 237, 0.2),
        rgba(139, 92, 246, 0.1),
        rgba(15, 23, 42, 0.1),
        rgba(0, 0, 0, 0))]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
