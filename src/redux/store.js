import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
