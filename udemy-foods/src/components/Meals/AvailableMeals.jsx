import React, { useState } from "react";
import mealDB from "../../MealDB.json";
import classes from "./AvailableMeals.module.css";
import MealItemCard from "./MealItemCard";

export default function AvailableMeals(props) {
  const [cartItems, setCartItems] = useState({});
  const payLoad = [];

  function addInCart(mealData, quantity) {
    setCartItems((prev) => ({
      ...prev,
      [mealData.idMeal]: {
        name: mealData.strMeal,
        price: mealData.price,
        quantity: quantity,
        totalCost: mealData.price * quantity,
      },
    }));
  }

  // console.log(cartItems, "===> cardData is ready"); ////// success.... respect++.... no longer required

  for (const key in cartItems){
    if(cartItems[key].quantity > 0)
      payLoad.push(cartItems[key]);
  }

  console.log(payLoad, "====>ordersArray");

  return (
    <section className={classes["available-meals"]}>
      <ul>
        {mealDB.meals.map((meal) => {
          // APPROACH 2 ..... using MealItemCard .... failed.... passes & respect++
          // explanation ..... quantity was not state of whole menu... it was state of card instead.
          return (
            <li key={meal.idMeal}>
              <MealItemCard
                key={meal.idMeal}
                price={meal.price}
                meal={meal}
                addInCart={addInCart}
                payLoad={payLoad}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
