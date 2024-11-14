import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function Layout() { 
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
