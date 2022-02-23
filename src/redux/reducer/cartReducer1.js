import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY } from "../action";
import { initialState } from "../store";

const cartReducer1 = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.recipesToBuy.find(
        (i) => i.product === item.product
      );
      if (isItemExist) {
        return {
          ...state,
          recipesToBuy: state.recipesToBuy.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          recipesToBuy: [...state.recipesToBuy, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        recipesToBuy: state.recipesToBuy.filter(
          (food, i) => i !== action.payload
        ),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        recipesToBuy: state.recipesToBuy.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};
export default cartReducer1;
