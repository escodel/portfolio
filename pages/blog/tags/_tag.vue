<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title container">Blog</h1>
      </div>
    </div>
    <section class="container">
      <div v-for="blogPost in data.stories" :key="blogPost.content._uid" class="card">
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
              <span v-text="formatDate(blogPost.published_at)"></span>
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
    </section>
  </div>
</template>

<script>
import Default from '~/layouts/default.vue'
import moment from 'moment'

export default {
  data () {
    return { total: 0, data: { stories: [] } }
  },
  components: {
    Default
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let tag = context.route.params.tag

    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: 'blog',
      per_page: 10,
      with_tag: tag
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  methods: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mma')
      }
    }
  }
}
</script>

<style lang="scss">
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
