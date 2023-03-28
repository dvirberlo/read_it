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
        background_color: "#deddda",
        icons: [
          {
            src: "/images/icon/icon.svg",
            type: "image/svg+xml",
            sizes: "512x512",
            purpose: "any maskable",
          },
          {
            src: "/images/icon/icon-white.svg",
            type: "image/svg+xml",
            sizes: "512x512",
            purpose: "any maskable",
          },
          {
            src: "/images/icon/icon-black.svg",
            type: "image/svg+xml",
            sizes: "512x512",
            purpose: "any maskable",
          },
          {
            src: "/images/icon/icon.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "any maskable",
          },
          {
            src: "/images/icon/icon512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
