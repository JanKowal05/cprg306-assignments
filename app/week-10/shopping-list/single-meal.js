
export default function Meal({mealObj}){

    const {
        idMeal,
        strMeal,
        strMealThumb
    } = mealObj

    return(
        <div>
            <h1>{strMeal}</h1>
            <img src={strMealThumb}/>

        </div>
    );
}