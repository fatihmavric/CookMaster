import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

export default function MyRecipes() {
  const { recipes } = useContext(RecipesContext);


  const currentUser = "Fatih";  //za sad je ovo hardcode, kasnije mogu dodati pravu logiku

  const myRecipes = recipes.filter(r => r.author === currentUser);

  if (myRecipes.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Moji recepti</h2>
        <p>Nema recepata. Dodaj svoj prvi recept!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Moji recepti</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {myRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
