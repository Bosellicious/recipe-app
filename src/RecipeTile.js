import React from "react";
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="recipeTile">
        <img className="recipeTile_img" alt="recipe image" src={recipe["recipe"]["image"]} />
        <p className="recipeTile_name">{recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
