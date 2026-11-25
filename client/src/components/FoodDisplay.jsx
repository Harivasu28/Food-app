import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list, searchQuery } = useContext(StoreContext)
  const normalizedSearch = searchQuery.trim().toLowerCase()

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes around you</h2>

      <div className="food-display-list">
        {food_list
          .filter((item) =>
            (category === 'All' || category === item.category) &&
            (!normalizedSearch ||
              item.name.toLowerCase().includes(normalizedSearch) ||
              item.description.toLowerCase().includes(normalizedSearch))
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  )
}

export default FoodDisplay