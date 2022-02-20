import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import LikeCard from "./LikeCard";
const LikedRecipes = () => {
  const like = useSelector((s) => s.like.likedRecipes);

  return (
    <Container>
      <h1 className="mt-5">Favourite Recipes</h1>
      {console.log("lIKED", like)}
      <Row>
        {like.map((breakfast, i) => (
          <>
            <LikeCard breakfast={breakfast} key={i} i={i} />
          </>
        ))}
      </Row>
    </Container>
  );
};

export default LikedRecipes;
