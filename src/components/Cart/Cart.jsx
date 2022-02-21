import Button from "@material-ui/core/Button";

import { FaTrash } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { getTotal } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import Checkout from "../Payment/CheckOut";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.recipesToBuy);
  let totalPay = useSelector((state) => state.total.payment);
  let total = cartList.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue.price),
    0
  );
  const dispatch = useDispatch();

  return (
    <Container className="home__wrap">
      <Col sm={12} className="cart__products">
        <ul style={{ listStyle: "none" }}>
          {cartList.map((recipe, i) => (
            <>
              <li key={i} className="my-4">
                <CartCard breakfast={recipe} i={i} />
              </li>
            </>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          {}
          {/*   TOTAL:
          {cartList.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )} */}
          totalPay: {total}
        </Col>
        <Col>
          <Link to="/checkout">
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                dispatch(getTotal({ total }));
              }}
            >
              CheckOut
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
