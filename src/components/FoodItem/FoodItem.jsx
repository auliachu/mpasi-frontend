import React, { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FoodItem = ({id,name,description,bahan,image}) => {

  const {url} = useContext(StoreContext)
  const location = useLocation()
  const isRecommendPage = location.pathname.includes('/recommend');

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/images/"+image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        {isRecommendPage && (
          <Link to={`/recommend/detail/${id}`}><button className='detail-button'>Detail</button></Link>
        )}
      </div>
    </div>
  )
}

export default FoodItem
