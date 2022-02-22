import { SET_TOTAL, ADJUST_ITEM_QTY } from "../action";
import { initialState } from "../store";
const totalReducer = (state = initialState.total, action) => {
  switch (action.type) {
    case SET_TOTAL:
      return {
        ...state,
        payment: action.payload,
      };

    default:
      return state;
  }
};

export default totalReducer;
