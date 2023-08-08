import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const reducers = combineReducers({
  todoReducer: reducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
