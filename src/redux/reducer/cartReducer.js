import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";
import { initialState } from "../store";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        recipesToBuy: [...state.recipesToBuy, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        recipesToBuy: state.recipesToBuy.filter(
          (food, i) => i !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default cartReducer;
