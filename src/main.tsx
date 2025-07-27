import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GalleryProvider } from "@/components/GalleryContext";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </HelmetProvider>
);
