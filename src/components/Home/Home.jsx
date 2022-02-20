import RecipeCard from "./RecipeCard";
import breakfast from "../../data/breakfast.json";
import { Container, Row } from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRecipesAction } from "../../redux/action";
const Home = () => {
  const recipes = useSelector((state) => state.recipes.recipesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);
  return (
    <>
      <Container fluid className="">
        <Row className="justify-content-start align-items-center">
          {recipes.map((b, i) => (
            <RecipeCard breakfast={b} key={i} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
