import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GalleryProvider } from "@/components/GalleryContext";

createRoot(document.getElementById("root")!).render(
  <GalleryProvider>
    <App />
  </GalleryProvider>
);
