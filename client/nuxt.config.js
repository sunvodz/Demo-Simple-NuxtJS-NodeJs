module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  plugins: [
    "~/plugins/axios" //-- add plugins axios
  ],
  proxy: {
    "/api": "http://localhost:8080", //-- ตั้งค่า map proxy url api server
    ws: true
  },
  modules: [
    "@nuxtjs/proxy" //-- add modules proxy
  ],
  build: {
    vendor: [
      "vue-axios" //-- add vendor vue-axios
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
