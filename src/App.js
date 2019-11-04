import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userAction";
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
function App({ setCurrentUser, currentUser }) {
  const [state, setState] = useState({ currentUser: null });
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setState({ currentUser: userAuth });
      }
    });
    return function cleanUp() {
      unsub();
    };
  }, [setCurrentUser]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Signup />
          }
        />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignIn />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
