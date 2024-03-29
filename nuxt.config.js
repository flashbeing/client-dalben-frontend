const AVAILABLE_LANGUAGES = ['it']

export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dal Ben | Abbigliamento uomo, donna e bambino',
    htmlAttrs: {
      lang: 'it',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Dal Ben Abbigliamento propone ai propri clienti capi particolari, con stili e tessuti ricercati per vestire qualsiasi fascia d’età, uomo, donna e bambino. Inoltre, offre un esclusivo servizio di personal shopper anche su appuntamento, per una nuova esperienza d'acquisto!",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Georama:wght@400;500;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/css/animations.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components/', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/markdownit',
  ],

  i18n: {
    locales: AVAILABLE_LANGUAGES,
    strategy: 'prefix_except_default',
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: AVAILABLE_LANGUAGES.reduce(
        (obj, key) => ({
          ...obj,
          [key]: require('./locales/' + key + '.json'),
        }),
        {}
      ),
    },
  },

  markdownit: {
    breaks: true,
    typographer: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/em/': {
      target: 'https://dalben.codeworks.build/em/',
      pathRewrite: { '^/em/': '' },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'file-loader',
            query: {
              name: 'static/image/[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'vue-svg-loader',
            options: {
              // Optional svgo options
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      })
    },
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'current',
  },

  pageTransition: 'zoom-page',

  telemetry: false,
}
