import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_LOADING,
  ADMIN_ORDERS_FAIL,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_SUCCESS,
} from "../action";
import { initialState } from "../store";

const orderNewReducer = (state = initialState.recipes, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        recipesList: action.payload,
      };
    case GET_ORDERS_LOADING:
    case ADMIN_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADMIN_ORDERS_SUCCESS:
      return { loading: false, stock: action.payload };
    case GET_ORDERS_ERROR:
    case ADMIN_ORDERS_FAIL:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default orderNewReducer;
