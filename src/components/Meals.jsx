import React, { useEffect, useState } from 'react'
import MealItem from './MealItem';
function Meals() {
    const [mealsData, setMealsData] = useState([])
    console.log('meals');
    async function fetchMeals() {

        try {
            console.log('fetching...');
            const response = await fetch('http://localhost:3000/meals')
            console.log("fetched");
            if (!response.ok) {

            }
            const meals = await response.json()
            console.log('meals =====>', meals);
            setMealsData(meals)
        } catch (error) {
            console.log('error');
        }
        return () => {
            console.log("cleaning up fetch");
            // controller.abort()
        }
    }
    useEffect(() => {

        fetchMeals()
        // return () => {
        // controller.abort()
        // console.log('cleaning up useEffect') }
    }, [])
    return (
        <ul id="meals">
            {
                mealsData.map(meal => <MealItem key={meal.id}
                    meal={meal}
                />)
            }
        </ul>
    )
}

export default Meals