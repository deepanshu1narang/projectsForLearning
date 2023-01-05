import React from 'react'
import FoodImages from '../Layout/FoodImages'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <>
      <MealsSummary />
      <FoodImages />
      <AvailableMeals />
    </>
  )
}
