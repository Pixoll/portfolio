import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { config as dotenv } from "dotenv";

dotenv({ quiet: true });

const BUILD_DIR = process.env.BUILD_DIR || "build";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: BUILD_DIR,
      assets: BUILD_DIR,
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
