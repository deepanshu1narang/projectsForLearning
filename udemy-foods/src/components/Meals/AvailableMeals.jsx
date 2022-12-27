import React, { useEffect } from "react";
import { useState } from "react";
import OrderFormTemporary from "../UI/OrderFormTemporary";
import Print from "../UI/Print";
import classes from "./AvailableMeals.module.css";
import MealItemForm from "./MealItemForm";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  const testMessage = () => {
    setQuantity(quantity + 1);
  };

  const toggle = (e) => {
    e.preventDefault();
    if (e.target.id === "increase") 
        setQuantity(quantity + 1);
    else if (e.target.id === "decrease") 
        setQuantity(quantity - 1);
  };

  return (
    <section className={classes["available-meals"]}>
      <ul>
        {meals.map((meal) => {
          return (
            <li key={meal.idMeal}>
              <div className={classes["mealCard"]}>
                <h1>{meal.strMeal}</h1>
                <img src={meal?.strMealThumb} alt={meal.strMeal} />
                <div className={classes.mealCardFooter}>
                  <h3>{"Rs. " + (Math.random() * 300 + 100).toFixed(2)}</h3>
                  {quantity === 0 && (
                    <button onClick={() => testMessage()}>
                      Add to Cart
                    </button>
                  )}
                  {quantity > 0 && (
                    <MealItemForm id="mealItemForm" quantity={quantity} toggle={toggle} inputId={meal.idMeal+0.2} />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
