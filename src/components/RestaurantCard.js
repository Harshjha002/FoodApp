import React from 'react'

const RestaurantCard = ({ image, title, cuisines, rating, deliveryTime,mealForTwo }) => {
  return (
    <div className="res-card">
      <img src={image} alt={title} className="res-img" />
      <div className="res-info">
        <h3 className="res-title">{title}</h3>
        <h4 className="res-cussine">{cuisines}</h4>
        <h4 className="res-rating">{rating}</h4>
        <h4 className="res-delivery-time">{deliveryTime} minutes</h4>
        <h4 className='res-costForTwo'>{mealForTwo}</h4>
      </div>
    </div>
  );
};


export default RestaurantCard
