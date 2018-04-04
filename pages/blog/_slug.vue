<template>
  <section class="util__container">
    <div v-editable="story.content" class="blog content">
      <h1>{{ story.content.name }}</h1>
      <div v-if="imagePresent">
        <div class="box">
          <div class="content">
            <img :src="story.content.image">
            <div class="has-text-right">
              <small><em>{{ story.content.image_caption }}</em></small>
            </div>
          </div>
        </div>
      </div>
      <div v-html="body" class="has-text-justified">
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import Default from '~/layouts/default.vue'

export default {
  data () {
    return {
      story: {
        content: {
          body: '',
          image: '',
          image_caption: ''
        }
      },
      imagePresent: false
    }
  },
  components: {
    Default
  },
  computed: {
    body () {
      return marked(this.story.content.body)
    }
  },
  methods: {
    image () {
      if (this.story.content.image) {
        this.imagePresent = true
        return this.story.content.image
      }
      return false
    },
    image_caption () {
      return this.story.image_caption
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
    this.image_caption()
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
.blog {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 100px;

  img {
    width: 100%;
    height: auto;
  }

  p:first-child::first-letter {
    float: left;
    font-size: 3rem;
    padding-right: 0.5rem;
    padding-top: 0;
    line-height: 3rem;
  }
}

.box {
  margin-bottom: 2rem;
}

.blog__body {
  line-height: 1.6;
}
</style>
