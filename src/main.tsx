import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
