import React, { useEffect, useState } from "react";
import classes from "./MealItemCard.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItemCard(props) {
  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
  };

  const toggle = (e) => {
    e.preventDefault();
    if (e.target.id === "increase") {
      setQuantity((quantity) => quantity + 1);
    } else if (e.target.id === "decrease") {
      setQuantity((quantity) => quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const cartDataHandler = (mealData, quantity) => {
    if(quantity > 0){
      props.addInCart(mealData, quantity);
    }
  }

  useEffect(() => {
    cartDataHandler(props.meal, quantity);
    // eslint-disable-next-line
  }, [props.meal, quantity]);

  return (
    <div className={classes["mealCard"] }>
      <h1>{props.meal.strMeal}</h1>
      <img src={props.meal?.strMealThumb} alt={props.meal.strMeal} />
      <div className={classes.mealCardFooter}>
        <h3>{"Rs. " + props.price}</h3>
        <span>
          {quantity === 0 ? (
            <button
              id={props.meal.idMeal + 0.4}
              onClick={(e) => addToCartHandler(e, props.meal)}
            >
              Add to Cart
            </button>
          ) : (
              <MealItemForm
                quantity={quantity}
                toggle={(e) => toggle(e, props.meal)}
                inputId={props.meal.idMeal + 0.2}
              />
          )}
        </span>
        {quantity > 0 && <div>Rs. {props.meal.price * quantity}</div>}
      </div>
    </div>
  );
}