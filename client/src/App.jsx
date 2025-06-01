import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      <Navbar/>
      <div className='px-6 '>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
