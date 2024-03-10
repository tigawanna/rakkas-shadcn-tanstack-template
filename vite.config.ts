import { defineConfig, loadEnv } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import analyze from "rollup-plugin-analyzer";

const env = loadEnv("", process.cwd(), "");
Object.assign(process.env, env);

export default defineConfig({
  ssr: {
    external: ["@auth/core", "rakkasjs/node-adapter"],
  },
  plugins: [tsconfigPaths(), react(), rakkas({}), analyze({
    // highlight the modules with size > 60kb
    filter(moduleObject) {
      return moduleObject.size > 6000;
    },
  })],
  server: {
    port: 3000,
    host: true,
  },
});
