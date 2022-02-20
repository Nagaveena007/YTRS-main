import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRecipesAction } from "../../redux/action";

const RecipeStore = () => {
  const recipes = useSelector((state) => state.recipes.recipesList);
  const dispatch = useDispatch();
  const [recipesSelected, setRecipesSelected] = useState(null);

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);
  const changeRecipe = (recipe) => setRecipesSelected(recipe);
  return (
    <Row className="">
      <Col md={4}>
        <RecipeList
          recipesSelected={recipesSelected}
          changeRecipe={changeRecipe}
          recipes={recipes}
        />
      </Col>
      <Col md={8}>
        <RecipeDetail foodSelected={recipesSelected} />
      </Col>
    </Row>
  );
};

export default RecipeStore;
