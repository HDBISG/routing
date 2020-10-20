import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./Users";
import Contact from "./Contact";
import Customer from "./Customer";
import RedirectHome from "./RedirectHome";
import Notfound from "./Notfound";


const routing = (
  <Router basename="route">
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Customer">
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/RedirectHome">
          RedirectHome
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/Customer" component={Customer} />
        <Route path="/RedirectHome" component={RedirectHome} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
