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
      registerType: "autoUpdate",
      includeAssets: [],
      manifest: {
        name: displayName,
        short_name: displayName,
        description,
        theme_color: "#3584e4",
        icons: [
          {
            src: "/images/icon/icon.svg",
            type: "image/svg+xml",
          },
          {
            src: "/images/icon/icon-white.svg",
            type: "image/svg+xml",
          },
          {
            src: "/images/icon/icon-black.svg",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
