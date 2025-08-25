import { useContext, useState } from "react";
import { seedRecipes } from "../data/seedRecipes";
import RecipeList from "../components/RecipeList";
import { RecipesContext } from "../context/RecipesContext";


export default function Home() {
    const { recipes, favorites, toggleFavorite } = useContext(RecipesContext);

    const [searchTerm, setSearchTerm] = useState("");
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1> Svi recepti</h1>
            <input
                type="text"
                placeholder="Pretraži recepte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: 20, padding: 8, width: "50%", boxSizing: "border-box" }}
            />
            <RecipeList recipes={filteredRecipes}
             toggleFavorite={toggleFavorite}
             favorites={favorites}
            />
        </div>
    );
}
