import { getData } from "../services/api.service.ts";
import { useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipesBase.ts";
import Recipe from "../components/Recipe.tsx";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    getData("/recipes").then((data) => {
      setRecipes(data.recipes);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-3">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesPage;
