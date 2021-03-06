import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./users";
// import { configureStore } from "@reduxjs/toolkit";

export default function configureStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return store;
}
