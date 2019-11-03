import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepages/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Signup from "./pages/signup-out-in/Signup";
import SignIn from "./components/sign-in/Sign-in";
import { auth } from "./firebase/firebase.utils";

import "./App.css";
function App() {
  const [state, setState] = useState({ currentUser: null });
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(user => {
      setState({ currentUser: user });
    });
    return function cleanup() {
      unsub = null;
    };
  }, []);
  return (
    <div>
      <Header currentUser={state.currentUser} />
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
