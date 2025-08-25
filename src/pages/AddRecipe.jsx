import React, { useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext.jsx";
import { useNavigate } from "react-router-dom";
import "../App.css";


export default function AddRecipe() {
  const { addRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const currentUser = "Fatih";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now().toString(),
      title,
      category,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((item) => item.trim()).filter(Boolean),
      image,
      author: currentUser,
      createdAt: new Date().toISOString()
    };
    addRecipe(newRecipe);
    navigate("/recipes");
  };

  return (
    <div className="form-container">
      <h1>Dodaj novi recept</h1>
      <form onSubmit={handleSubmit} className="recipe-form">
        <label>
          Naslov:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Kategorija:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="npr. doručak, ručak"
          />
        </label>

        <label>
          Sastojci (odvojeni zarezom):
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            placeholder="npr. jaja, mleko, brašno"
          />
        </label>

        <label>
          Koraci (odvojeni tačkom):
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            rows={5}
            placeholder="npr. Umutiti jaja. Dodati mleko. ..."
          />
        </label>

        <label>
          URL slike:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            placeholder="npr. https://example.com/slika.jpg"
          />
        </label>

        <button type="submit" className="btn-submit">
          Dodaj recept
        </button>
      </form>
    </div>
  );
}
