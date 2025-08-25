import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import "./Category.css";

function Category() {
  const { categoryName } = useParams();
  const { recipes } = useContext(RecipesContext);
  //console.log("Parametar:", categoryName);

  // Ako postoji parametar categoryName u url prikazujem recepte iz te kategorije
  if (categoryName) {
    const filtered = recipes.filter(
      (r) => r.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
      <div className="category-page">
        <h1 className="category-title">Recepti za: {categoryName}</h1>
        {filtered.length > 0 ? (
          <ul className="recipe-List">
            {filtered.map((recipe) => (
              <li key={recipe.id} className="recipe-item">
                <Link to={`/recipes/${recipe.id}`} className="recipe-link">
                  {recipe.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-recipes">Nema recepata u ovoj kategoriji.</p>
        )}

        <Link to="/categories" className="back-link">
          ⬅ Nazad na kategorije
        </Link>
      </div>
    );
  }

  // Ako nema parametra prikazujem listu svih kategorija
  const categories = /*["Dorucak", "Rucak", "Vecera", "Dezert", "Grickalice"];hardcode proba xd*/ [...new Set(recipes.map(r => r.category))];

  return (
    <div className="category-page">
      <h1 className="category-title">Kategorije recepata</h1>
      <div className="categories-grid">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/recipes/category/${cat.toLowerCase()}`}
            className="category-card"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
