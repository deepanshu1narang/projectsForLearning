import React from 'react';
import mealsImg from "../../assets/meals.jpg" ;
import thaliFood from "../../assets/foood.jpg" ;
import pizza from "../../assets/pizza.jpg" ;
import ramen from "../../assets/ramen.jpg" ;
import classes from "./FoodImages.module.css"
// import classes form "./FoodImages.module.css";

export default function FoodImages() {
  return (
    <div className={classes['main-images']} >
        <img src={mealsImg} alt="56 bhog 😋😋" />
        <img src={pizza} alt="pizza 😋😋" />
        <img src={ramen} alt="ichiraku no ramen 😋😋" />
        <img src={thaliFood} alt="paneer thali 😋😋" />
      </div>
  )
}
