import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../action";
import { initialState } from "../store";

const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {
        ...state,
        // ordersList: [...state.ordersList, action.payload],
        ordersList: action.payload,
      };

    case REMOVE_FROM_ORDER:
      return {
        ...state,
        ordersList: state.ordersList.filter((food, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default orderReducer;
