import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VocabularyBuilder from './pages/VocabularyBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='select-none'>
      <Navbar />
      {/* <Home /> */}
      {/* <Feature /> */}
      <VocabularyBuilder />
      <Footer />
    </div>
  )
}



export default App
