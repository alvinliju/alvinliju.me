import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Letter from "./Letter";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Letter />
  </StrictMode>,
);
