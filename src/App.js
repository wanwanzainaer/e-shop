import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepages/Home";
import Shop from "./pages/shop/Shop";

import "./App.css";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
