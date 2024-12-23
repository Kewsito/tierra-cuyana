// @ts-check
import { defineConfig } from 'astro/config';


import tailwind from '@astrojs/tailwind';




import netlify from '@astrojs/netlify';




// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kewsito.github.io',
  base: 'tierra-cuyana',
  adapter: netlify(),
});