import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/actions/userAction";
import { createStructuredSelector } from "reselect";

// import Home from "./pages/homepages/Home";
import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

import { selectCollectionsForPreview } from "./redux/selectors/shop.selectors";

import "./App.css";

const Home = lazy(() => import("./pages/homepages/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Signup = lazy(() => import("./components/sign-up/Sign-up"));
const SignIn = lazy(() => import("./components/sign-in/Sign-in"));
const CheckOut = lazy(() => import("./pages/checkout/CheckOut"));

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <Signup />)}
            />
            <Route
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route exact path="/checkout" component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps, { checkUserSession })(App);
