import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import { useLocation } from 'react-router-dom'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const frameId = window.requestAnimationFrame(() => {
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location])
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </>
   
  )
}

export default App
