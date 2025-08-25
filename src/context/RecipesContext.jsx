import { createContext, useState, useEffect } from "react";
//import { seedRecipes } from "../data/seedRecipes";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {

  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("cookmaster-recipes");
    return saved ? JSON.parse(saved) : /*seedRecipes*/ [];
  });

  
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("cookmaster-favorites");
    return saved ? JSON.parse(saved) : [];
  });

 
  const [myRecipes, setMyRecipes] = useState(() => {
    const saved = localStorage.getItem("cookmaster-myrecipes");
    return saved ? JSON.parse(saved) : [];
  });

  // Čuvanje stanja u localStorage kad god se promeni
  useEffect(() => {
    localStorage.setItem("cookmaster-recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("cookmaster-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cookmaster-myrecipes", JSON.stringify(myRecipes));
  }, [myRecipes]);

  // dodavanje novog recepta
  const addRecipe = (recipe) => {
    setRecipes((prev) => [recipe, ...prev]);
    setMyRecipes((prev) => [recipe, ...prev]);
  };

  // dodavanje u omiljene recepte
  const addFavorite = (recipeId) => {
    if (!favorites.includes(recipeId)) {
      setFavorites((prev) => [...prev, recipeId]);
    }
  };

  // Uklanjanje iz omiljenih
  const removeFavorite = (recipeId) => {
    setFavorites((prev) => prev.filter((id) => id !== recipeId));
  };

  // Toggle favorite status
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  //brisanje
  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
   
  };

  //izmena
  const updateRecipe = (updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
    );
    
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        favorites,
        myRecipes,
        addRecipe,
        toggleFavorite,
        deleteRecipe,
        updateRecipe
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
