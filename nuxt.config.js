module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Eric Delia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio site built with Vue and Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
   /*
  ** Include css not in components
  */
  css: [
  // node.js module but we specify the pre-processor
    { src: '~assets/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/markdownit'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.md$/,
          loader: 'vue-markdown-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend (config, { isDev, isClient }) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/') {
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
          delete rule.loader;
          delete rule.options;
        }
      })
    }
  },
  vendor: ['image-webpack-loader']
}
