import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/NavBar";
import UserNav from "./components/UserNav";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <UserNav /> */}
    </div>
  );
}

export default App;
