import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CreateGlobalstyles from "./ResetCSS/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalstyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
