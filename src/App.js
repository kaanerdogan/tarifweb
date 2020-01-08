import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

function App() {
  const APP_ID = "51460619";
  const APP_KEY = "a829b76b4803ac504f8fb0ba35319814";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('eggs');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const searchChange = e => {
    setSearch(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
      <div className="App">
        <form onSubmit={submitSearch}>
          <input id="recipeSearch" type="text" value={search} onChange={searchChange}/>
          <button type="submit">
            Tarif Ara
          </button>
        </form>
        <br/>
        {recipes.map(recipe => (
            <Recipe
                key={recipe.recipe.uri}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
            />
        ))}
      </div>
  );
}
export default App;
