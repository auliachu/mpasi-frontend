import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Recommend from './pages/Recommendation/Recommend'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import FoodDetail from './components/FoodDetail/FoodDetail'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recommend' element={<Recommend/>} />
        <Route path='/recommend/detail/:foodRecId' element={<FoodDetail/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
