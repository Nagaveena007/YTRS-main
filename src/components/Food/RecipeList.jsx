import Food from "./Food";

const RecipeList = ({ recipes, changeRecipe, recipesSelected }) => (
  <div>
    {recipes.map((recipes) => (
      <Food
        key={recipes.id}
        recipes={recipes}
        changeRecipe={changeRecipe}
        recipesSelected={recipesSelected}
      />
    ))}
  </div>
);

export default RecipeList;
