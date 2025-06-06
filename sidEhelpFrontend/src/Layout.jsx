import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
      <main>
        <Outlet />
      </main>
      <footer>
       <Footer />
      </footer>
    </div>
  )
}

export default Layout
