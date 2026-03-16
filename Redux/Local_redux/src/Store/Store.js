import { legacy_createStore, combineReducers } from "redux";
import { Reducer as AuthReducer } from "../Redux/Auth/Reducer";
import { Reducer as TodoReducer } from "../Redux/Todo/Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

const ownStore = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { ownStore };