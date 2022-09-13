import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import Contactreducer from "./Redux/Reducers/Contactreducer";
import { Provider } from "react-redux";

const store = createStore(Contactreducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
