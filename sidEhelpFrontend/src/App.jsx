import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VocabularyBuilder from './pages/VocabularyBuilder'
import LoginAndSignUp from './pages/LoginAndSignUp'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import { store } from './app/store'
import AppInitializer from './components/AppIntializer'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <Provider store={store}>
        <AppInitializer isAuthenticated={isAuthenticated}>
          <div className="select-none">
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feature" element={<Feature />} />
              <Route path="/vocabulary-builder" element={<VocabularyBuilder />} />
              <Route path="/login" element={<LoginAndSignUp setIsAuthenticated={setIsAuthenticated} />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </AppInitializer>
      </Provider>
    </>
  )
}

export default App