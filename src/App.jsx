import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/placeOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>   {/* creating Routes for all the pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>  
        <Route path='/order' element={<PlaceOrder/>}/>
        
  
      </Routes>
    </div>
  )
}

export default App

