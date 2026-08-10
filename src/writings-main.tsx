import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Writings from "./Writings";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Writings />
  </StrictMode>,
);
