import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import UserNav from "../src/components/UserNav";
// import NavBar from "./components/NavBar";

function test() {
  return (
    <div className="App">
      <UserNav />
      
    </div>
  );
}

export default test;
