import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="pasta"
          ingredients={["flour", "water"]}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
