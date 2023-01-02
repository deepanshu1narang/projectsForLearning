import React from "react";
import classes from "./MealItemCard.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItemCard(props) {
  return (
    <div className={classes["mealCard"]}>
      {console.log(props.meal)}
      <h1>{props.meal.strMeal}</h1>
      <img src={props.meal?.strMealThumb} alt={props.meal.strMeal} />
      <div className={classes.mealCardFooter}>
        <h3>{"Rs. " + props.price}</h3>
        <span>
          {props.quantity === 0 ? (
            <button id={props.meal.idMeal + 0.4} onClick={(e) => props.addToCartHandler(e)}>
              Add to Cart
            </button>
          ) : (
            <MealItemForm
              quantity={props.quantity}
              toggle={props.toggle}
              inputId={props.meal.idMeal + 0.2}
            />
          )}
        </span>
        {props.quantity > 0 && <div>Rs. {props.meal.price * props.quantity}</div>}
      </div>
    </div>
  );
}
