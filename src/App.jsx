import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Panels from './pages/Panels'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/panels" element={<Panels />} />
      </Routes>
      <Contact />
      <BackToTop />
    </>
  )
}

export default App
