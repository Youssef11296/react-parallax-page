// modules
import React from "react";
import ReactDOM from "react-dom";
// components
import App from "./App";
// context
import ContextProvider from "./context/mainContext";
// ui
import { bgAnimation, cursorAnimation } from "./ui/parallaxAnimation";
// global styles
import "./styles/global.scss";

bgAnimation();
cursorAnimation();

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
