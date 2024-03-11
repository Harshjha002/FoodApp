import React, { useState } from "react";
import { restaurants } from "../utils/mockResdata";
import RestaurantCard from "./RestaurantCard";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">search</div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRes = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(topRatedRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            image={CDN_URL + restaurant.info.cloudinaryImageId}
            title={restaurant.info.name}
            cuisines={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
            deliveryTime={restaurant.info.sla.deliveryTime}
            mealForTwo={restaurant.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
