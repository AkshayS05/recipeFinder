import { useState, useRef } from "react";
import "./Create.css";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredients.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing]);
      setNewIngredients("");
      // ingredientInput.current.focus();
    }
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        {/* ingredients go here  */}
        <label>
          <span>
            Recipe Ingredients:
            <div className="ingredients">
              <input
                type="text"
                onChange={(e) => setNewIngredients(e.target.value)}
                value={newIngredients}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} className="btn">
                add
              </button>
            </div>
          </span>
        </label>
        <p>
          {" "}
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em>{i},</em>
          ))}
        </p>
        <label>
          <span> Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
