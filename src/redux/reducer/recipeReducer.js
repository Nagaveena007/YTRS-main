import { GET_RECIPES } from "../action";
import { initialState } from "../store";

const recipesReducer = (state = initialState.recipes, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesList: action.payload,
      };

    default:
      return state;
  }
};
export default recipesReducer;
