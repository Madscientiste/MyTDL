import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const usePath = (_path: string, ...other: string[]) => path.join(__dirname, _path, ...other);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: "/MyTDL",

    define: {
      __VITE_ENABLE_FAKE_BACKEND__: mode === "github",
    },

    test: {
      globals: true,
      environment: "jsdom",
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
      outDir: "docs",
      manifest: true,
      emptyOutDir: false,
      rollupOptions: {
        // Not removing this file from the build will causes issues
        external: [path.join(usePath("./test/server/server.ts"))],
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
  };
});
