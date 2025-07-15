"use client"

import { useState, useEffect } from "react";
import Meal from "./single-meal";

export default function MealIdeas(ingredient) {

    const [meals, setMeals] = useState("ok");
    let loaded = false;

    async function fetchMealIdeas() {
        try {
            //const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
            const rawData = await response.json()
            console.dir(rawData.meals)
            loaded = true;
            setMeals(rawData.meals)
            return rawData.meals;
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchMealIdeas();
    }, []);


    return (
        <div>

        </div>
    );
}