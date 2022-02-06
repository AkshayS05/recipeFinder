import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";
export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const history = useHistory();
  useEffect(() => {
    if (error) {
      //redirect
      // history.goBack();
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error]);
  return (
    <div>
      {isPending && <h2 className="loading">Loading...</h2>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cokkingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">recipe.method</p>
        </>
      )}
    </div>
  );
}
