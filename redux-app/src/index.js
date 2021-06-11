import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from "react-redux"//The <Provider> component makes the Redux store available to any nested components that need to access the Redux store
import { createStore } from "redux";

import rootReducer from "./services/reducers/index" //exported name of the conbineReducers obj

const store = createStore(rootReducer);
console.warn("store data: ", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);







// import * as actions from "./src2/actionTypes"
// import store from "./src2/store"
// import  { bugAdded, bugResolved} from "./src2/actions"
// import BugList from './src2/BugList';

// //state = reducer (state, action);
// //notify the subscribers.

// const unsubscribe = store.subscribe(() => {
//   console.log("Strore changed!", store.getState());
// }) //UI sould be subscribed to the store so they get notified every time store changes

// store.dispatch(bugAdded("Bug1"))
// store.dispatch(bugResolved("Bug2"))

// unsubscribe() //If the sate changes we dont get notified anymore.


// console.log(store.getState())
