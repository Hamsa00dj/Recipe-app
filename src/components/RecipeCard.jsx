/* eslint-disable react/jsx-no-target-blank */
import React from "react";
const RecipeCard = ({ recipes }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipes;
    
    return (
        <div className="card">
             <h1>Hello</h1>
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
                />

            <div className="card-body">
                <h1>Hello</h1>
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard;