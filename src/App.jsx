import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>   {/* creating Routes for all the pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<cart/>}/>  
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App

