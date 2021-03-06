import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: true },
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      //external: /^lit/,
    },
  },
});
