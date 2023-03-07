import { configureStore } from "@reduxjs/toolkit";

//reducers
import casesReducer from "./reducers/cases";
import typesReducer from "./reducers/types";

const store = configureStore({
  reducer: {
    cases: casesReducer,
    types: typesReducer,
  },
});

export default store;
