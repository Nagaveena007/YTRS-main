export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USER_NAME = "SET_USER_NAME";
export const GET_RECIPES = "GET_RECIPES";
export const SET_TOTAL = "SET_TOTAL";
export const SEARCH_QUERY = "SEARCH_QUERY";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCartAction = (food) => ({
  type: ADD_TO_CART,
  payload: food,
});

export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const adjustItemQty = (index, qty) => ({
  type: ADJUST_ITEM_QTY,
  payload: {
    id: index,
    qty,
  },
});

export const loadCurrentItem = (food) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: food,
  };
};

export const addToFavoAction = (food) => ({
  type: ADD_TO_FAV,
  payload: food,
});
export const removeFromFavoAction = (food) => ({
  type: REMOVE_FROM_FAV,
  payload: food,
});

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});
export const getTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const getRecipesAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "http://localhost:3000/recipes"
        //"https://api.airtable.com/v0/appTaPWT8FuYGIzGm/Recipes?api_key=keyAS1qqs37KlnJBF"
      );
      if (resp.ok) {
        const food = await resp.json();
        console.log("main object", food.records);
        dispatch({
          type: GET_RECIPES,
          payload: food,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
