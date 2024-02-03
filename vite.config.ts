import { defineConfig, loadEnv } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const env = loadEnv("", process.cwd(), "");
Object.assign(process.env, env);

export default defineConfig({
  ssr: {
    external: ["@auth/core", "rakkasjs/node-adapter"],
  },
  plugins: [tsconfigPaths(), react(), rakkas({})],
  server: {
    port: 3000,
    host: true,
  },
});
