import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
// import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";
export default function Recipe() {
  const { mode } = useTheme();
  const { id } = useParams();
  // const url = "http://localhost:3000/recipes/" + id;
  // const { data: recipe, isPending, error } = useFetch(url);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = () => {};
  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe ☹");
        }
      });
  }, [id]);

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
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <h2 className="loading">Loading...</h2>}

      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={() => handleClick}>Update</button>
        </>
      )}
    </div>
  );
}
