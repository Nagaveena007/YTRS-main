import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import LikeCard from "./LikeCard";
import { Typography } from "@material-ui/core";
const LikedRecipes = () => {
  const like = useSelector((s) => s.like.likedRecipes);

  return (
    <Container>
      <h2 className="mt-5"></h2>
      <Typography gutterBottom variant="h4">
        Favourite Recipes
      </Typography>
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
