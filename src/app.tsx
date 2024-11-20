import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="font-bold text-2xl underline text-red-700">Hello World</div>
  </React.StrictMode>
);
