import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import RecipeList from "../components/RecipeList";

export default function Favorites() {
  const { recipes, favorites, toggleFavorite } = useContext(RecipesContext);

  // Filtriramo samo recepte koji su u omiljenim
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Omiljeni recepti</h1>
        <p>Trenutno nema omiljenih recepata.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Omiljeni recepti</h1>
      <RecipeList recipes={favoriteRecipes} toggleFavorite={toggleFavorite} />
    </div>
  );
}
