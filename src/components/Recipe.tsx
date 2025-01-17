import { FC } from "react";
import { IRecipe } from "../models/IRecipesBase.ts";
import List from "./List.tsx";

type RecipeProps = {
  recipe: IRecipe;
};
const Recipe: FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="flex flex-col gap-4 border border-green-400 p-3">
      <h2 className="font-semibold text-white p-2 bg-orange-500">
        {recipe.name === "Russian Borscht" ? "Ukrainian Borscht" : recipe.name}
      </h2>
      <p>
        Cuisine: {recipe.cuisine === "Russian" ? "Ukrainian" : recipe.cuisine}
      </p>

      <img src={recipe.image} alt={recipe.name} />

      <p className="font-semibold">Ingredients:</p>
      <List array={recipe.ingredients} className="list-decimal list-inside" />

      <p className="font-semibold">Instructions:</p>
      <List
        array={recipe.instructions}
        className="italic list-decimal list-inside"
      />
    </div>
  );
};

export default Recipe;
