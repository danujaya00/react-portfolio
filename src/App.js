import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "./common/NavBar";
import HomePage from "./screens/HomePage";
import AboutMe from "./screens/AboutMe";
import ContactMe from "./screens/ContactMe";
import Gallery from "./screens/Gallery";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contactMe" component={ContactMe} />
      <Route path="/gallery" component={Gallery} />
    </Router>
    
  );
}

export default App;
