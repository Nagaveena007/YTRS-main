import { Col, Container, Row, Image } from "react-bootstrap";

const FoodItemsCard = ({ recipes, changeRecipe, recipesSelected }) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src="" thumbnail />
        </Col>
        <Col md={6}>
          <div class="card-body">
            <h5 class="card-title">"name"</h5>
            <p class="card-text">"Ingredients"</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodItemsCard;
/* import { Card } from "react-bootstrap";

const Food = ({ recipes, changeRecipe, recipesSelected }) => (
  <Card
    className={
      recipesSelected?.id === recipes.id ? "border-thick mt-3" : "mt-3"
    }
    onClick={() => changeRecipe(recipes)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={recipes.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="font-weight-bold">{recipes.title}</Card.Text>
        <p>{recipes.price}</p>
      </div>
    </Card.Body>
  </Card>
);

export default Food; */
