import { CardMedia, Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { addToCartAction } from "../../redux/action";
import PaymentPage from "../Payment/PaymentPage";
import { Label } from "@material-ui/icons";
import "./Details.css";
const DetailsPage = () => {
  const [value, setValue] = React.useState(2);
  const [dish, setDish] = useState(undefined);
  const recipes = useSelector((state) => state.recipes.recipesList);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    let recipeId = params.recipeId;
    let recipesToShow = recipes.find((d) => d.id.toString() === recipeId);
    setDish(recipesToShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {dish ? (
        <>
          <Row className="mt-2">
            <Col md={8}>
              <Card
                className=""
                style={{
                  width: "100vh",
                  height: "60vh",
                }}
              >
                {/*  <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  //  height="140"
                  image={dish.img}
                  title="Contemplative Reptile"
                /> */}
                <ReactPlayer
                  // className={classes.media}
                  className="player-wrapper"
                  url={dish.url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Card>

              {/*   <DishComments selectedDish={dish} /> */}
              {/*   <DishReviews selectedDish={dish} /> */}
            </Col>
            <Col md={4}>
              <div disableSpacing className="card-body">
                <h3 className="card-title">{dish.name}</h3>
                {/*  <small>In stock</small> */}
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <small color="green">(8 Reviews)</small>
                </Box>
                <br />
                <h4 className="card-title">€ {dish.price} </h4>
                {/*     <h4 className="card-title">
                  {dish.ingredients.items}
                  {dish.ingredients.quantity}
                  {dish.ingredients.unit}
                </h4> */}
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group"
                >
                  <Button size="small" fontSize="small">
                    -
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled
                    style={{ color: "black" }}
                  >
                    1
                  </Button>
                  <Button>+</Button>
                </ButtonGroup>
                {console.log(dish.ingredients)}
                <p className="card-text">
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className="mt-2"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => {
                      dispatch(addToCartAction(dish));
                    }}
                  >
                    Add to cart
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <PaymentPage ingredients={dish} />
          </Row>
        </>
      ) : (
        <h2>404 - Dish not found</h2>
      )}
    </Container>
  );
};

export default DetailsPage;
