import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [reactRefresh(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    outDir: "../dist",
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
      },
    },
  },
});
