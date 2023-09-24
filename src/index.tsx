import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootNode = document.getElementById("app")!;
const root = createRoot(rootNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
