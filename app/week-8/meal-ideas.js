"use client"

import { useState, useEffect } from "react";

export default function MealIdeas(ingredient){
  
    const [meals, setMeals] = useState(null);
 
    async function fetchMealIdeas(){
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}")
            console.dir(response)
            console.log("ayo")
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchMealIdeas();
    },[]);
  
    return(
        <div>
            <p>test</p>

        </div>
    );
}