import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { Home } from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
