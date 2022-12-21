import React, { useEffect } from 'react'
import { useState } from 'react';
import classes from "./AvailableMeals.module.css";

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
        .then(response => response.json())
        .then(data => {
            setMeals(data.meals);
        });
    }, []);


  return (
    <section className={classes["available-meals"]}>
      <ul>
        {
            meals.map(meal => {
                return(
                    <li key={meal.idMeal}>
                        <div className={classes["mealCard"]}>
                            <h1>{meal.strMeal}</h1>
                            <img src={meal?.strMealThumb} alt={meal.strMeal} />
                            <div className={classes.mealCardFooter}>
                                <h3>{"$"+(Math.random()*190 + 10).toFixed(2)}</h3>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </li>
                );
            })
        }
      </ul>
    </section>
  )
}
