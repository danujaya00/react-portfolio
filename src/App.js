import React from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./screens/HomePage";
import HomeBody from "./screens/HomePage/body";
import AboutMe from "./screens/AboutMe";

function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
      <HomeBody />
      <Route path="/aboutMe" component={AboutMe} />
    </Router>
  );
}

export default App;
