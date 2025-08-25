import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { RecipesContext } from "../context/RecipesContext";

export default function EditRecipe() {
  const { recipeId } = useParams();
  const { recipes, updateRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  // pronalazimo recept po ID-u
  const recipe = recipes.find(r => String(r.id) === recipeId);

  if (!recipe) {
    return <p style={{ padding: 20 }}>Recept nije pronađen!</p>;
  }

  // inicijalne vrednosti inputa iz recepta
  const [title, setTitle] = useState(recipe.title);
  const [category, setCategory] = useState(recipe.category);
  const [image, setImage] = useState(recipe.image);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join("\n"));
  const [steps, setSteps] = useState(recipe.steps.join("\n"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      ...recipe,
      title,
      category,
      image,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    updateRecipe(updated);
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <h1>Izmeni recept</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <label>Naslov recepta</label>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Naslov recepta" 
          required
        />

        <label>Kategorija</label>
        <input 
          value={category} 
          onChange={e => setCategory(e.target.value)} 
          placeholder="Doručak, Ručak, Dezert..." 
          required
        />

        <label>URL slike</label>
        <input 
          value={image} 
          onChange={e => setImage(e.target.value)} 
          placeholder="https://..." 
          required
        />

        <label>Sastojci (svaki u novom redu)</label>
        <textarea 
          value={ingredients} 
          onChange={e => setIngredients(e.target.value)} 
          rows={5} 
          required
        />

        <label>Priprema (svaki korak u novom redu)</label>
        <textarea 
          value={steps} 
          onChange={e => setSteps(e.target.value)} 
          rows={5} 
          required
        />

        <button 
          type="submit" 
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Sačuvaj izmene
        </button>
      </form>
    </div>
  );
}
