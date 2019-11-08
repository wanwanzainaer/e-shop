import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middlewares = [logger];

export const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
