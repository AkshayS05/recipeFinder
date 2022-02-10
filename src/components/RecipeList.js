import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { useTheme } from "../hooks/useTheme";
import trashIcon from "../assets/trashIcon.svg";

//styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { color } = useTheme();
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No Recipes found 🤷‍♂️</div>;
  }
  const handleDelete = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <div className="head-container">
            <h3>{recipe.title}</h3>
          </div>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link
            to={`/recipes/${recipe.id}`}
            style={{ background: color, color: "#fff" }}
          >
            Cook This
          </Link>
          <img src={trashIcon} onClick={() => handleDelete(recipe.id)}></img>
        </div>
      ))}
    </div>
  );
}
