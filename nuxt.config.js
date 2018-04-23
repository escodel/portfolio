const axios = require('@nuxtjs/axios')
const Storyblokclient = require('storyblok-js-client')

let Storyblok = new Storyblokclient({
  accessToken: 'FBRfpdyqPBt0xJrHc47QSQtt'
})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Eric Delia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eric Delia is a senior front-end developer with a passion for HTML, CSS, and JavaScript. This portfolio site was built with Vue, Nuxt, Bulma, and Storyblok.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ericdelia_' },
      { hid: 'site-verification', name:'google-site-verification', content: '5Okin1cAGo23N6WtAww_8qbIBq5YdcNjYRwNEErG-RY' }
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
    '@nuxtjs/axios',
    ['storyblok-nuxt', {
      accessToken: 'FBRfpdyqPBt0xJrHc47QSQtt',
      cacheProvider: 'memory'
    }]
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  generate: {
    routes: function () {
      return Storyblok.get('cdn/stories')
      .then((res) => {
        return res.data.stories.map((post) => {
          return '/blog/' + post.slug
        })
      })
    }
  },
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
  vendor: ['image-webpack-loader', 'moment'],
  mode: 'spa'
}
