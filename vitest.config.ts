import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
  plugins: [react()],
});
