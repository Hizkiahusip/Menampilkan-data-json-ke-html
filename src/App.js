import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import GetData from "./Pages/Get/GetData";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/getdata" component={GetData} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
