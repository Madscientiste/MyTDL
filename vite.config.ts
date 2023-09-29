import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const usePath = (_path: string, ...other: string[]) => path.join(__dirname, _path, ...other);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "happy-dom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: [path.join(usePath("./test/setup.ts"))],
  },

  resolve: {
    alias: [
      { find: "@", replacement: path.join(usePath("./src")) },
      { find: "@test", replacement: path.join(usePath("./test")) },
    ],
  },

  build: {
    outDir: "dist",
    manifest: true,
    emptyOutDir: false,
    rollupOptions: {
      input: path.join(usePath("./src"), "index.tsx"),
      output: {
        chunkFileNames: "js/[name].chunk-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (asset: any) => {
          const isFont = /\.(woff|woff2|eot|ttf|otf)$/.test(asset.name);
          const group = isFont ? "fonts" : "assets";
          return `${group}/[name].[ext]`;
        },
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        secure: false,
      },
    },
  },
});
