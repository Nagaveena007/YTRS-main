import Button from "@material-ui/core/Button";

import { FaTrash } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { getTotal, clearCart } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import Checkout from "../Payment/CheckOut";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const cartList = useSelector((state) => state.cart.recipesToBuy);
  let total = cartList.reduce(
    (acc, currentValue) =>
      acc + parseFloat(currentValue.price) * currentValue.qty,
    0
  );
  const dispatch = useDispatch();

  return (
    <Container className="">
      <Row>
        <div className="cart">
          <div className="cart__items">
            {cartList.map((recipe, i) => (
              <CartCard breakfast={recipe} i={i} />
            ))}
          </div>

          <div className="cart__summary">
            <h4 className="summary__title">Cart Summary</h4>
            <div className="summary__price">
              <span>TOTAL: ({cartList.length} items)</span>
              <span>$ {total}</span>
            </div>
            {cartList.length !== 0 ? (
              <Link to="/checkout">
                <button
                  className="summary__checkoutBtn"
                  onClick={() => {
                    dispatch(getTotal(total));
                  }}
                >
                  Proceed To Checkout
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button className="summary__checkoutBtn">
                  Add Items to cart
                </button>
              </Link>
            )}
          </div>
        </div>
        {/*         <Button onClick={() => dispatch(clearCart(cartList))}>Clear</Button>
         */}{" "}
      </Row>
    </Container>
  );
};

export default Cart;
