import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/actions/userAction";
import { createStructuredSelector } from "reselect";

import Home from "./pages/homepages/Home";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Signup from "./components/sign-up/Sign-up";
import SignIn from "./components/sign-in/Sign-in";
import CheckOut from "./pages/checkout/CheckOut";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

import { selectCollectionsForPreview } from "./redux/selectors/shop.selectors";

import "./App.css";
function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
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
        <Route exact path="/checkout" component={CheckOut} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  { checkUserSession }
)(App);
