<template>
  <div class="something">
    <h1 v-html="postTitle"></h1>
    <div v-html="postBody"></div>
  </div>
</template>

<script>
import test from '../static/posts/test.md'

export default {
  data: function() {
    return {
      posts: []
    }
  },
  methods: {
    fetchData: function() {
      let self = this
      let dir = 'https://api.github.com/repos/escodel/portfolio/contents/posts'

      fetch(dir)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data[0].url)
          fetch(data[0].url)
            .then((urlResponse) => {
              return urlResponse.json()
            })
            .then((urlData) => {
              console.log(urlData)
            })
          // self.posts = data
          // console.log(self.posts)
        })
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    postTitle() {
      const postTitle = test.substring(test.indexOf('title: ') + 13, test.indexOf('date:') - 7)
      const postTitleNoQuotes = postTitle.replace(/^"(.*)"$/, '$1')
      return postTitleNoQuotes
    },
    postBody() {
      const postBody = test.substring(test.lastIndexOf('</h2>') + 5)
      return postBody
    }
  }
}
</script>
