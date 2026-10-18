import { defineConfig } from "vite";

export default defineConfig({
  base: "/flying-button/",
  build: {
    outDir: "../static/flying-button",
    emptyOutDir: true,
  },
});
