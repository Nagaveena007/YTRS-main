import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY } from "../action";
import { initialState } from "../store";

const cartNewReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      /*  const item = state.recipes.recipesList.find(
        (dish) => dish.id === action.payload.id
      ); */

      const inCart = state.recipesToBuy.find((item) =>
        item.id === action.payload.id ? true : false
      );

      console.log("INCART", inCart);

      return {
        ...state,
        recipesToBuy: inCart
          ? state.recipesToBuy.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.recipesToBuy, { ...action.payload, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        recipesToBuy: state.recipesToBuy.filter(
          (item, i) => i !== action.payload
        ),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        recipesToBuy: state.recipesToBuy.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
export default cartNewReducer;
