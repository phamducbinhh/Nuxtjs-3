// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "assets/css/tailwind.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  meta: {
    title: "Nuxt3 course",
  },
  build: {
    transpile: ["vuetify"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
