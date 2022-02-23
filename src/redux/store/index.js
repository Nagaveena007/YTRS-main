import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../reducer/cartReducer";
import cartNewReducer from "../reducer/cartNewReducer";
import likeReducer from "../reducer/likeReducer";
import recipeReducer from "../reducer/recipeReducer";
import totalReducer from "../reducer/totalReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  cart: {
    recipesToBuy: [],
  },
  recipes: {
    recipesList: [],
  },
  user: {
    userName: "",
  },
  total: {
    payment: 0,
  },
  like: {
    likedRecipes: [],
  },
};
const bigReducer = combineReducers({
  cart: cartNewReducer,
  recipes: recipeReducer,
  total: totalReducer,
  like: likeReducer,
});
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY, // this is mandatory
      onError: (error) => {
        // this is optional
        console.log("encryption error", error);
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, bigReducer);
export let configureStore = createStore(
  persistedReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export const persistor = persistStore(configureStore);
/*
let configureStore = createStore(
  bigReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export default configureStore;
*/
