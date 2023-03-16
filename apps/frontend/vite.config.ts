/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";
import {defineConfig, searchForWorkspaceRoot} from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/frontend",

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "node_modules"),
    },
  },

  server: {
    port: 4200,
    host: "localhost",
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
