<template>
  <div class="pagination-bar">
    <span v-if="numberOfPages > 1" v-for="page in numberOfPages" :key="page.id">
      <nuxt-link class="button" :to="'/blog?page=' + page" v-on:click.native="$emit('update-blog', page)">
        {{ page }}
      </nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      numberOfPages: ''
    }
  },
  mounted () {
    this.setNumberOfPages()
    this.setCurrentPage()
  },
  methods: {
    setNumberOfPages () {
      if (this.total / this.perPage < 1) {
        this.numberOfPages = 1
      } else {
        this.numberOfPages = this.total / this.perPage
      }
    },
    setCurrentPage () {
      this.currentPage = this.$route.query.page || 1
    }
  },
  watch: {
    '$route': function () {
      this.setCurrentPage()
    }
  },
  props: [
    'total',
    'perPage'
  ]
}
</script>

<style lang="scss">
  .pagination-bar {
    margin-top: 3rem;
  }
</style>
