import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";

installGlobals();

export default defineConfig({
  plugins: [
    remixDevTools({
      pluginDir: "./plugins",
    }),
    remix(),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ["remix-i18next"],
  },
  server: {
    open: true,
    port: 3000,
  },
});
