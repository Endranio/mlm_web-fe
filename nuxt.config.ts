// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
   vite: {
    resolve: {
      alias: {
        'form-data': 'form-data/lib/form_data.js',
      },
    },
  },
  
  css: ["~/assets/css/main.css"],
});
