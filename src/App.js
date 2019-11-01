import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepages/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Signup from "./pages/signup-out-in/Signup";
import SignIn from "./components/sign-in/Sign-in";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
