import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homepages/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Signup from "./components/sign-up/Sign-up";
import SignIn from "./components/sign-in/Sign-in";
import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase.utils";

import "./App.css";
function App() {
  const [state, setState] = useState({ currentUser: null });
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot);
          setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setState({ currentUser: userAuth });
      }
    });
    return function cleanUp() {
      unsub();
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
