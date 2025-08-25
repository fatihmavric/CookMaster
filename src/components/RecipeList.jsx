import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

export default function RecipeList({ recipes, toggleFavorite, favorites }) {
  if (!recipes || recipes.length === 0) {
    return <p>Nema recepata za prikaz.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card-wrapper">
          <RecipeCard
            recipe={recipe}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites?.includes(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
