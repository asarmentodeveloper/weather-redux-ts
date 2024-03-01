import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/global";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
