<template>
  <div class="flex-content">
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title container">
          <nuxt-link :to="'/blog'">
            Blog
          </nuxt-link>
        </h1>
      </div>
    </div>
    <div class="social">
      <h2>Share this post</h2>
      <ul>
        <li>
          <a class="twitter-share-button" :href="'https://twitter.com/intent/tweet?text=' + story.content.name + '&url=https://www.ericdelia.com' + this.$route.fullPath" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-2x fa-twitter"></i>
          </a>
        </li>
        <li>
          <a :href="'https://www.linkedin.com/shareArticle?url=http://www.ericdelia.com' + this.$route.fullPath + '&mini=true&title=' + story.content.name + '&summary=' + story.content.intro" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-2x fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
    <section class="util__container">
      <div v-editable="story.content" class="blog content">
        <h1>{{ story.content.name }}</h1>
        <div v-if="imagePresent">
          <div class="box">
            <div class="content">
              <img :src="story.content.image">
              <div class="has-text-right">
                <small><em v-html="image_caption"></em></small>
              </div>
            </div>
          </div>
        </div>
        <div v-html="body" class="has-text-justified dropcap">
        </div>
        <div class="tags">
          <span v-for="tag in story.tag_list" :key="tag.id" class="tag is-primary">
              <nuxt-link :to="'/blog/tags/' + tag">
                {{ tag }}
              </nuxt-link>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'
import Default from '~/layouts/default.vue'

export default {
  head () {
    let post = this.story.content
    return {
      title: 'Eric Delia - ' + post.name,
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        innerHTML: JSON.stringify(this.structuredData),
        type: 'application/ld+json'
      }],
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@ericdelia_'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: post.name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: post.intro
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: post.image + '/1200'
        },
        {
          hid: 'og:title',
          prefix: 'og: http://ogp.me/ns#',
          property: 'og:title',
          content: post.name
        },
        {
          hid: 'og:image',
          prefix: 'og: http://ogp.me/ns#',
          property: 'og:image',
          content: post.image
        },
        {
          hid: 'og:description',
          prefix: 'og: http://ogp.me/ns#',
          property: 'og:description',
          content: post.intro
        },
        {
          hid: 'og:url',
          prefix: 'og: http://ogp.me/ns#',
          property: 'og:url',
          content: 'https://www.ericdelia.com' + this.$route.fullPath
        }
      ]
    }
  },
  data () {
    return {
      story: {
        content: {
          body: '',
          image: '',
          image_caption: ''
        }
      },
      imagePresent: false,
      structuredData: {}
    }
  },
  components: {
    Default
  },
  computed: {
    body () {
      if (this.story.content.body) {
        return marked(this.story.content.body)
      }
    },
    image_caption () {
      if (this.story.content.image_caption) {
        return marked(this.story.content.image_caption)
      }
    }
  },
  methods: {
    image () {
      if (this.story.content.image) {
        axios.get(this.story.content.image)
          .then((res) => {
            this.imagePresent = true
            return res
          })
          .catch((err) => {
            console.log(err.response.data)
          })
        // return this.story.content.image
      }
      // return false
    },
    tag_list () {
      return this.story.tag_list
    }
  },
  mounted () {
    this.$storyblok.init()
    this.$storyblok.on('change', () => {
      location.reload(true)
    })
    this.$storyblok.on('published', () => {
      location.reload(true)
    })

    this.image()
    // this.image_caption()
    this.tag_list()
    this.structuredData = {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "author": {
        "@type": "Person",
        "name": "Eric Delia"
      },
      "image": this.story.content.image,
      "datePublished": this.story.published_at,
      "headline": this.story.name,
      "publisher": {
        "@type": "Organization",
        "name": "Eric Delia",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ericdelia.com/eric-delia-logo-cropped.png"
        }
      },
      "description": this.story.content.intro,
      "keywords": this.story.tag_list.join(', ')
    }
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/blog/${context.params.slug}`

    return context.app.$storyapi.get(endpoint, {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="scss">
@import '~assets/variables';
@import '~bulma/sass/utilities/mixins';

.flex-content {
  display: flex;
  flex-direction: column;
}

.blog {
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }

  .dropcap::first-letter {
    float: left;
    font-size: 3rem;
    margin-top: -0.25rem;
    padding-right: 0.5rem;
    padding-top: 0;
    line-height: 3rem;
  }
}

.social {
  flex: 1;
  order: 3;
  text-align: center;
  // background-color: $blue;
  background-color: lightblue;
  padding: 2rem 0;
}

.social h2 {
  color: $prussianblue;
  font-weight: bold;
}

.social ul {
  list-style: none;
}

.social ul li {
  margin: 1rem 1.5rem;
  display: inline-block;
}

.social ul li a {
  color: #fff;
}

.social ul li a:hover {
  color: $highlight;
}

.box {
  margin-bottom: 2rem;
}

.blog__body {
  line-height: 1.6;
}

.tags {
  margin-top: 3rem;
}

.tag a {
  color: #fff;
}
.tag a:hover {
  color: $highlight;
}

@include mobile {

}
</style>
