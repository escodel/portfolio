<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title container">
          <nuxt-link :to="'/blog'">
            Blog
          </nuxt-link>
        </h1>
      </div>
    </div>
    <section class="container">
      <div v-for="blogPost in data.stories" :key="blogPost.content._uid" class="card" v-on:update-blog="updateBlogIndex($event)">
        <header class="card-header level">
          <div class="card-header-title level-left">
            <p class="level-item">
              <nuxt-link :to="'/' + blogPost.full_slug">
                {{ blogPost.content.name }}
              </nuxt-link>
            </p>
          </div>
          <div class="level-right">
            <p class="level-item">
              <small v-text="formatDate(blogPost.published_at)"></small>
            </p>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            {{ blogPost.content.intro }}
          </div>
          <div class="card-footer">
            <span class="tag is-primary" v-for="tag in blogPost.tag_list" :key="tag.id">
              <nuxt-link :to="'/blog/tags/' + tag">
                {{ tag }}
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
      <pagination v-if="total > 1" :total="total" :perPage="perPage"></pagination>
    </section>
  </div>
</template>

<script>
import Default from '~/layouts/default.vue'
import Pagination from '~/components/pagination.vue'
import StoryblokClient from 'storyblok-js-client'
import moment from 'moment'

var Storyblok = new StoryblokClient({
  accessToken: 'FBRfpdyqPBt0xJrHc47QSQtt'
})

export default {
  data () {
    return { total: 0, data: { stories: [], page: 1 } }
  },
  components: {
    Default,
    Pagination
  },
  async asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let currentPage = context.route.query.page || 1

    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog',
      per_page: 1,
      page: currentPage
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  methods: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY h:mma')
      }
    },
    updateBlogIndex: function (value) {
      Storyblok.get('cdn/stories', {
        starts_with: 'blog',
        per_page: 1,
        page: value
      }).then((res) => {
        this.data.stories = res.data.stories
      })
    }
  },
  watch: {
    '$route': function() {
      this.page = this.$route.query.page
      this.updateBlogIndex(this.$route.query.page)
    }
  }
}
</script>

<style lang="scss">
  .card {
    margin-bottom: 1rem;
  }
  .card-footer {
    padding-top: 1rem;
  }
  .card-header {
    padding: 1rem;
  }
  .card-header-title {
    padding: 0;
  }
  .level {
    margin-bottom: 0 !important;
  }
  @media screen and (max-width: 768px) {
    .level-left + .level-right {
      margin-top: 0;
    }
  }
</style>
