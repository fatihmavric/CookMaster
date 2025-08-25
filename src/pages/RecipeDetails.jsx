import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext.jsx";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { recipes, favorites, toggleFavorite, deleteRecipe, EditRecipe } = useContext(RecipesContext);

  // Trenutni korisnik (može biti iz localStorage ili context)
  const currentUser = "Fatih";
  const recipe = recipes.find((r) => r.id === recipeId);



 
  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <Link to="/recipes">&larr; Nazad</Link>
        <h2>Recept nije pronađen</h2>
        <p>Proveri URL ili se vrati na listu recepata.</p>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-details">
      <Link to="/recipes" className="back-link">
        &larr; Nazad na listu
      </Link>

      <h1 className="recipe-title">{recipe.title}</h1>

      <button
        onClick={() => toggleFavorite(recipe.id)}
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
      >
        ❤️ {isFavorite ? "Ukloni iz omiljenih" : "Dodaj u omiljene"}
      </button>

      {recipe.author === currentUser && (
        <div className="actions">
          <Link to={`/recipes/${recipe.id}/edit`}>
            <button className="edit-btn">✏️ Izmeni</button>
          </Link>
          <button onClick={() => deleteRecipe(recipe.id)} className="delete-btn">
            🗑️ Obriši
          </button>
        </div>
      )}

      <p className="meta">
        Kategorija: <strong>{recipe.category}</strong> • Autor: <em>{recipe.author}</em> •{" "}
        {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : ""}
      </p>

      <img
        src={recipe.image || "https://via.placeholder.com/400x250?text=Bez+slike"}
        alt={recipe.title}
        className="recipe-image"
      />

      <section>
        <h2>Sastojci</h2>
        <ul>
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Priprema</h2>
        <ol>
          {recipe.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}