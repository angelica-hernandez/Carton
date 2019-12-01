import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/NavBar";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <AddItem /> */}
    </div>
  );
}

export default App;
