import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import NavNames from "./components/NavNames";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Root from "./Root";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          {/* <Home /> */}
          {/* <NavNames /> */}
          <Switch>
            <Route exact path="/activity-router" component={Root} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;