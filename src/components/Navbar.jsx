import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/recipes">Svi recepti</Link></li>
        <li><Link to="/add-recipe">Dodaj recept</Link></li>
        <li><Link to="/favorites">Omiljeni</Link></li>
        <li><Link to="/my-recipes">Moji recepti</Link></li>
        <li><Link to="/categories">Kategorije</Link></li> {/* 👈 Dodato */}
      </ul>
    </nav>
  );
}
