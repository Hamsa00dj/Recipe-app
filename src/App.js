import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
// import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState("")
  
  // search for the recipe
  // const searchRecipes = async () => {
  //   setIsLoading(true);
  //   const url = searchApi + query
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setRecipes(data.meals);
  //   setIsLoading(false);
  // };

  useEffect(() =>{ 
    async function searchRecipes () {
    // setIsLoading(true);
    const request= axios
    .get(url)
        .then((response) =>{ setRecipe(response.data.meals)
        // console.log(response.data.meals[0])
      })
        .catch((error)=> setError(error.message));
        // setIsLoading(false);
        return request;
    } 
    searchRecipes();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [url]);

  // useEffect(() => {
  //   searchRecipes()
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   searchRecipes();
  // }

  return (
    <div className="container">
      {/* <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      /> */}
      <div className="recipes">
        
        {recipe ? recipe.map(recipes => (
          <RecipeCard
             key={recipes.idMeal}
             recipes={recipes}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default App;
