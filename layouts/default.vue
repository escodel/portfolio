<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="http://via.placeholder.com/150x50" alt="Eric Delia">
        </a>

        <div class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
          <a class="navbar-item" href="/cv">
            CV
          </a>
          <a class="navbar-item" href="/music">
            Music
          </a>
          <a class="navbar-item" href="/blog">
            Blog
          </a>
          <a class="navbar-item" href="/about">
            About
          </a>
        </div>
      </div>

      <div class="navbar-end is-hidden-touch">
        <a class="navbar-item" href="https://github.com/escodel" target="_blank">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://www.linkedin.com/in/ericdelia" target="_blank">
          <span class="icon">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://twitter.com/metkovic_" target="_blank">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://soundcloud.com/metkovic" target="_blank">
          <span class="icon">
            <i class="fa fa-soundcloud"></i>
          </span>
        </a>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false,
        activeItem: ''
      }
    },
    mounted() {
      let route = this.$route.path
      let navItem = document.querySelector('[href="' + route + '"]')
      navItem.classList.add('is-active')
    }
  }
</script>

<style>
/* html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
