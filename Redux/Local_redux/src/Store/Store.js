import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { Reducer as authReducer } from "../Redux/Auth/Reducer";
import { Reducer as todoReducer } from "../Redux/todos/Reducer";
import { Reducer as userReducer } from "../Redux/Api/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  user: userReducer,
});

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, enhancer);

export { store };