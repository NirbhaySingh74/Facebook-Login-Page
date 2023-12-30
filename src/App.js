import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body.js";

import "./App.css";
const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
