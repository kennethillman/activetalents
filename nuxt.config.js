const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-match-heights',
    '~/plugins/vue-mq',
    { src: "~/plugins/vue-waypoint.client.js", mode: 'client'},
    '~/plugins/svg4everybody'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    //'@nuxtjs/emotion',
    '@nuxtjs/svg-sprite',
    // '@nuxtjs/svg' -> nuxt-svg: Unexpected '.svg' rule in the webpack configuration
    '@nuxtjs/device'
  ],

  /* Style Resources */
  styleResources: {
    scss: [
      '~/assets/scss/*.scss'
    ]
  },

  /* Emotion */
  // emotion: {
  //     module options
  // },

  /* Svg Sprite */
  svgSprite: {
    input: '~/assets/icons/'
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isDev && ctx.isClient) {

      }

    }
  }
}
