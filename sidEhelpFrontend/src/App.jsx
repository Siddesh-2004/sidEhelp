import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VocabularyBuilder from './pages/VocabularyBuilder'
import LoginAndSignUp from './pages/LoginAndSignUp'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="select-none">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/vocabulary-builder" element={<VocabularyBuilder />} />
        <Route path="/login" element={<LoginAndSignUp />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App