import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import Thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;
