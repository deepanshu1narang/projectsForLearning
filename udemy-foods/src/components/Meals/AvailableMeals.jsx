import React from "react";
import { useState } from "react";
import mealDB from "../../MealDB.json";
import classes from "./AvailableMeals.module.css";
import MealItemCard from "./MealItemCard";

export default function AvailableMeals() {
  // const [meals, setMeals] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // const [quantity, setQuantity] = useState(parseInt(mealDB.meals.quantity));

  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
  //     .then((response) => {
  //       console.log(response);
  //       response.json()})
  //     .then((data) => {
  //       setMeals(data.meals);
  //     });
  // }, []);

  const addToCartHandler = (e) => {
    e.preventDefault();
    console.log(e, "===> e");
    console.log(e.target, "===> e.target");
    console.log(e.target.id, "===> e.target.id");
    console.log(e.target.innerText, "===> e.target.innerText");
    // setQuantity(quantity => quantity + 1);
    setQuantity((quantity) => quantity + 1);
  };

  const toggle = (e) => {
    e.preventDefault();
    if (e.target.id === "increase") setQuantity((quantity) => quantity + 1);
    else if (e.target.id === "decrease")
      setQuantity((quantity) => quantity - 1);
  };

  const mealList = mealDB.meals.map((meal) => {
    return (
      // APPROACH 2 ..... using MealItemCard .... failed
      <li key={meal.idMeal}>
        <MealItemCard
          key={meal.idMeal}
          price={meal.price}
          quantity={quantity}
          addToCartHandler={addToCartHandler}
          toggle={toggle}
          meal={meal}
        />
      </li>
    );
  });

  return (
    <section className={classes["available-meals"]}>
      <ul>
        {mealList}
      </ul>
    </section>
  );
}
