import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider/index";

const rootNode = document.getElementById("app")!;
const root = createRoot(rootNode);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
