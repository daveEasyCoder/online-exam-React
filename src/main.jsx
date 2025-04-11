import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "../components/GlobalContext/Context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/online-exam-React">
      <GlobalContextProvider>
         <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>
);
