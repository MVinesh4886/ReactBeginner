import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Message from "./component/Message";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
    <Message />
  </div>
);
