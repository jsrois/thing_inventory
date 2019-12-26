import * as React from "react";
import ThingsList from "./components/ThingsList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ThingForm from "./components/ThingForm";

const App = (): JSX.Element => (
  <Router>
    <div className="navigationBar">
      <NavLink
        exact
        activeClassName="navigationBar__link--active"
        className="navigationBar__link"
        to="/"
      >
        Things
      </NavLink>
      <NavLink
        exact
        activeClassName="navigationBar__link--active"
        className="navigationBar__link"
        to="/new"
      >
        New thing
      </NavLink>
      <NavLink
        exact
        activeClassName="navigationBar__link--active"
        className="navigationBar__link"
        id="logout"
        to="/logout"
      >
        Sign Out
      </NavLink>
    </div>
    <Switch>
      <Route path="/" exact component={ThingsList} />
      <Route path="/new" exact component={ThingForm} />
    </Switch>
  </Router>
);
export default App;
