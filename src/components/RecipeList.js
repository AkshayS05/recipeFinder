import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
//styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { color } = useTheme();
  const {mode}= useTheme()
  if (recipes.length === 0) {
    return <div className="error">No Recipes found 🤷‍♂️</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <div className="head-container">
            <h3>{recipe.title}</h3>
            {/* <img
              onClick={() => handleDelete(recipe.id)}
              className="close-btn"
              src="https://cdn-icons.flaticon.com/png/512/1620/premium/1620739.png?token=exp=1644390003~hmac=d8f62d37905e956f06f9869810e752c5"
            ></img> */}
          </div>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link
            to={`/recipes/${recipe.id}`}
            style={{ background: color, color: "#fff" }}
          >
            Cook This
          </Link>
        </div>
      ))}
    </div>
  );
}
