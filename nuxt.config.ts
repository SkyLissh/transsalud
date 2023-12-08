// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true },
  components: [{ path: "~/components", pathPrefix: false }],
  css: [
    "primevue/resources/themes/lara-light-pink/theme.css",
    "primevue/resources/themes/lara-dark-pink/theme.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/eslint-module",
    "nuxt-primevue",
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
});
