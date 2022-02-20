import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/action";

const RecipeDetail = ({ foodSelected }) => {
  /*   const recipe = useSelector((state) => state.recipes.recipesList);
   */
  const dispatch = useDispatch();
  const [food, setFood] = useState(null);
  useEffect(() => {
    setFood(foodSelected);
  }, [foodSelected]);

  return (
    <div className="mt-3">
      {food ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{food.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="food-cover"
                  src={food.imageUrl}
                  alt="food selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>
                {food.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>
                {food.price}
              </p>
              <Button
                color="primary"
                onClick={() => {
                  dispatch(addToCartAction(food));
                }}
              >
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Please select a Recepie!</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default RecipeDetail;
