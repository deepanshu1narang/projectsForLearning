import React, { useState, useEffect } from 'react'
import FoodImages from '../Layout/FoodImages'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals(props) {
  return (
    <>
      <MealsSummary />
      <FoodImages />
      <AvailableMeals />
    </>
  )
}
