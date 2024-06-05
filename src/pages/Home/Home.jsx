import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Footer from '../../components/Footer/Footer'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import LoginPopUp from '../../components/LoginPopUp/LoginPopUp'

const Home = () => {

    const [category, setCategory] = useState("All");
  return (
    <>
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}  />
    </div>
    </>
  )
}

export default Home
