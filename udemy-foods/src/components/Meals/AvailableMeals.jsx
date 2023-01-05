import React, { useState } from "react";
import mealDB from "../../MealDB.json";
import classes from "./AvailableMeals.module.css";
import MealItemCard from "./MealItemCard";

export default function AvailableMeals() {
  const [cartItems, setCartItems] = useState({});

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

  console.log(cartItems, "===> in AvailableMeals"); ////// success.... respect++

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
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
