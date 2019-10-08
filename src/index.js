import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Items from "./pages/Items.js";
import Accueil from "./pages/Accueil.js";
import NavBar from "./components/NavBar.js";
import Lorem from "./pages/Lorem.js";

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/list" component={Items} />
      <Route path="/lorem" component={Lorem} />
      <Route path="/" component={Accueil} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
