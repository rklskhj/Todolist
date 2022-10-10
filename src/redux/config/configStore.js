// import { createStore } from "redux";
// import { combineReducers } from "redux";
import todos from "../modules/todos";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({ todos });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
