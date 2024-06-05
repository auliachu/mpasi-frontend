import React, { useContext } from 'react'
import './FoodDetail.css'
import { StoreContext } from '../../context/StoreContext'
import { useParams } from 'react-router-dom'


const FoodDetail = () => {

    const {food_list,url} = useContext(StoreContext)
    const {foodRecId} = useParams()
    const food = food_list.find((e)=>e._id === foodRecId)
    console.log(food_list)
    console.log(foodRecId)
    console.log(food)
    console.log(url)

  return (
    <div>
        <div className="foodDetail">
                    <div className="title-page">Detail Page</div>
                    <div className="foodDetail-left">
                    <div className="food-img">
                        <img className='imgFood' src={`${url}/images/${food.image}`} alt="img" />
                    </div>
                    <div className="foodDetail-right">
                        <div className="food-title">{food.name}</div>
                        <div className="food-description"><p>{food.description}</p></div>
                        <div className="food-bahan">Ingredients : {food.bahan}</div>
                        <div className="food-recipe">Recipe: {food.recipe}</div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FoodDetail
