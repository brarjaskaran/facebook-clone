import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

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
          </div>
        </>
      )}
    </div>
  );
}

export default App;
