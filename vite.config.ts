import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/spielplatz-deutsch/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Spielplatz-Deutsch",
        short_name: "Spielplatz",
        description: "Everyday German phrases for playground, Kita, and playdates",
        theme_color: "#E7EEF2",
        background_color: "#E7EEF2",
        display: "standalone",
        start_url: "/spielplatz-deutsch/",
        scope: "/spielplatz-deutsch/",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
