import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "3762f205";
  const YOUR_APP_KEY = "8cb6cadd1592f4d55bf21a9d7ed9bab1";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍔</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />

        <select className="app_healthLabels">
          <option value="vegan" onClick={() => sethealthLabels("vegan")}>
          vegan
          </option>
          <option
          value="vegetarian"
          onClick={() => sethealthLabels("vegetarian")}
          >
            vegetarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>
          dairy-free
          </option>
         
          <option onClick={() => sethealthLabels("gluten-free")} >
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            egg-free
          </option>

          <option onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
         
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>

          <option onClick={() => sethealthLabels("soya-free")}>
            soya-free
          </option>

          <option onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>

          <option onClick={() => sethealthLabels("shellfish-free")}>
            shellfish-free
          </option>

        </select>
      </form>

      <div className="app_recipes">
        {recipes !== [] &&
          recipes.map((recipe, index) => {
            return <RecipeTile key={index} recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;