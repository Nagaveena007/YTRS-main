import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY } from "../action";
import { initialState } from "../store";

const cartNewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.recipes.recipesList.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.recipesToBuy.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        recipesToBuy: inCart
          ? state.cart.recipesToBuy.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart.recipesToBuy, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        recipesToBuy: state.cart.recipesToBuy.filter(
          (item, i) => i !== action.payload
        ),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        recipesToBuy: state.cart.recipesToBuy.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
export default cartNewReducer;
