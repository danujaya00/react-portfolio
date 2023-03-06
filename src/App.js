import React from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./screens/HomePage";
import AboutMe from "./screens/AboutMe";
import ContactMe from "./screens/ContactMe";
import Gallery from "./screens/Gallery";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/home" component={HomePage}/>
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contactMe" component={ContactMe} />
      <Route path="/gallery" component={Gallery} />
    </Router>
    
  );
}

export default App;
