<template>
  <div>
    <h1>Total pages: {{ total }}</h1>
    <span v-for="page in numberOfPages" :key="page.id">
      <a class="button" :href="'/blog?page=' + page">
        {{ page }}
      </a>
    </span>
    <a class="button" v-if="numberOfPages > 1">NEXT</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nextPage: null,
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
  props: [
    'total',
    'perPage'
  ]
}
</script>
