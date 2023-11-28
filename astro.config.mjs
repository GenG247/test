import { defineConfig } from 'astro/config';
// import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  // output: "hybrid",
  // adapter: cloudflare(),
  integrations: [tailwind({
    applyBaseStyles: true,
    configFile: fileURLToPath(new URL('./tailwind.config.js', import.meta.url))
  }), mdx(), sitemap()]
});