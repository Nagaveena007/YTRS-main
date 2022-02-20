import { Col, Container, Row, Image } from "react-bootstrap";
import "../../components/Home/Home.css";

const BreakFast = ({ breakfast }) => {
  return (
    <Container>
      <Row>
        {breakfast.map((b, i) => (
          <>
            <Col key={i} md={6}>
              <Image src={b.img} thumbnail />
            </Col>
            <Col md={6}>
              <div class="card-body">
                <h4 class="card-title">{b.name}</h4>
                <h6>
                  <strong>Required Ingredients</strong>{" "}
                </h6>
                <p class="card-text">
                  {b.Ingredients.map((ing, i) => (
                    <div key={i}>
                      {ing.items}-{ing.quantity}
                      {ing.unit}
                    </div>
                  ))}
                </p>
                <p class="card-title">
                  {" "}
                  <strong>Cooking time:</strong> {b.cookingTime} min
                </p>
                <h6 class="card-title">
                  <strong>Price:</strong> ${b.price}{" "}
                </h6>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};
export default BreakFast;
