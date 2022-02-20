import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../Cart/Cart.css";
const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);
const CartIndicator = () => {
  const navigate = useNavigate();

  const cartLength = useSelector((state) => state.cart.recipesToBuy.length);

  const dispatch = useDispatch();

  return (
    <>
      <div className="" onClick={() => navigate("/cart")}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartLength} color="secondary">
            <ShoppingCartIcon
              style={{ width: "32px", height: "38px", color: "#707070" }}
            />
          </StyledBadge>
        </IconButton>
      </div>
    </>
  );
};

export default CartIndicator;
