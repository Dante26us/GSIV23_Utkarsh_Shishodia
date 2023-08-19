import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/moviesSlice";
import castReducer from "../reducers/castSlice";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cast: castReducer,
  },
  middleware: [thunkMiddleware, logger],
});
