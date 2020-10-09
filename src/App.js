import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

import configureStore from "./store/configureStore";
import * as actions from "./store/users";

const store = configureStore();

console.log(store);
function App() {
  const state = store.getState();
  console.log(state);

  const user = state;
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
