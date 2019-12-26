import * as React from "react";
import ThingsList from "./components/ThingsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThingForm from "./components/ThingForm";
import SideMenu from "./components/SideMenu";

const App = (): JSX.Element => (
  <Router>
    <SideMenu />
    <Switch>
      <Route path="/" exact component={ThingsList} />
      <Route path="/new" exact component={ThingForm} />
    </Switch>
  </Router>
);
export default App;
