import { Col, Container, Row, Image } from "react-bootstrap";
import "../../components/Home/Home.css";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const BreakFast = () => {
  const breakfast = useSelector((state) => state.recipes.recipesList);

  return (
    <Container>
      <Row>
        {breakfast.fields.map((b, i) => (
          <>
            <Col key={i} md={6}>
              <Image src={b.img} thumbnail />
            </Col>
            <Col md={6}>
              <div class="card-body">
                <h4 class="card-title">{b.Name}</h4>
                <h6>
                  <strong>Required Ingredients</strong>
                </h6>
                <p class="card-text">{b.Ingredients}</p>

                <p class="card-title">
                  {" "}
                  <strong>Cooking time:</strong> 30min
                </p>
                <h6 class="card-title">
                  <strong>Price:</strong> ${b.Price}{" "}
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
