import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCss from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://slidev-monorepo.vercel.app/",
        changeOrigin: true,
      },
    },
  },
});
