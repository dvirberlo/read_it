import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import { description, displayName } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  // add @/ -> src/ alias
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg}"],
      },
      includeAssets: [],
      manifest: {
        name: displayName,
        short_name: displayName,
        description,
        theme_color: "#62a0ea",
        background_color: "#3d3846",
        icons: [
          {
            src: "/images/icon/icon.png",
            type: "image/svg+xml",
            sizes: "144x144",
          },
          {
            src: "/images/icon/icon.svg",
            type: "image/svg+xml",
            sizes: "120x120",
          },
          {
            src: "/images/icon/icon-white.svg",
            type: "image/svg+xml",
            sizes: "120x120",
          },
          {
            src: "/images/icon/icon-black.svg",
            type: "image/svg+xml",
            sizes: "120x120",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
