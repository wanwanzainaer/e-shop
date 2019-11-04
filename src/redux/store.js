import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

export const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
