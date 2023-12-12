import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  experimental: {
    viewTransitions: true,
    assets: true,
  },
  server: { port: 3001 },
  adapter: node({ mode: "standalone" }),
});
