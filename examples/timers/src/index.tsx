import { Provider } from "@prodo/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { setupStreams } from "./actions";
import App from "./App";
import { initState, model } from "./store";

import "./index.scss";

const store = model.createStore({ initState });

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

store.dispatch(setupStreams)({});
