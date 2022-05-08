/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./pages.css";
import axios from 'axios';
import Cards from "../components/Cards";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const Pages = () => {
    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        async function searchRecipes() {
            
            const request = axios
                .get(url)
                .then((response) => {
                    setRecipe(response.data.meals)
                    // console.log(response.data.meals[0])
                })
                .catch((error) => setError(error.message));
            
            return request;
        }
        searchRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    return (
        <>
        <div>
            <div style={{ backgroundColor: "#d9e4f5",
                backgroundImage: "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)"
            }}>
              
                <h1 style={{display:"flex", justifyContent:"center"}}>Receipe</h1>
                </div>
                <div className="cards">
                  
                    {error ? recipe :
                        recipe.map((recipes) => (
                            <Cards
                                key={recipes.idMeal}
                                recipes={recipes} />
                        )) }
                </div>
            </div>
        </>
    )
}
