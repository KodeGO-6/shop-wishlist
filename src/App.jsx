import { React, useState } from 'react'
import './App.css'
import { Shop } from './pages/shop/Shop'
import { Wishlist } from './pages/wishlist/Wishlist'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext'

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
