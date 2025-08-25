import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar.jsx";


// stranice
import Home from "./pages/Home";
import Category from "./pages/Category";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import MyRecipes from "./pages/MyRecipes";
import EditRecipe from "./pages/EditRecipe.jsx";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes" element={<Home />} />
        <Route path="/recipes/category/:categoryName" element={<Category />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/recipes/:recipeId/edit" element={<EditRecipe />} />


      </Routes>
    </div>
  );
}
