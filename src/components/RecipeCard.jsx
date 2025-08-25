import { Link } from "react-router-dom";
import "./RecipeCard.css";

export default function RecipeCard({ recipe, toggleFavorite, isFavorite }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image || "https://via.placeholder.com/400x250?text=Bez+slike"}
        alt={recipe.title}
      />
      <h3>{recipe.title}</h3>
      <p>Kategorija: {recipe.category}</p>

      {toggleFavorite && (
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(recipe.id)}
          title={isFavorite ? "Ukloni iz omiljenih" : "Dodaj u omiljene"}
          style={{ color: isFavorite ? "red" : "#ccc" }} // boja se menja dinamički
        >
          ❤️ 
        </button>
      )}

      <div className="card-footer">
        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
          <button className="details-btn">Detalji</button>
        </Link>
        <small>{recipe.author}</small>
      </div>
    </div>
  );
}
