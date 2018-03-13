<template>
  <div class="site">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/img/eric-delia-logo-cropped.png" alt="Eric Delia">
        </a>

        <div class="navbar-burger highlight" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
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
          <!-- <a class="navbar-item" href="/music">
            Music
          </a>
          <a class="navbar-item" href="/blog">
            Blog
          </a> -->
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
    <nuxt class="site-content" />
    <footer class="footer">
      <div class="container">
        <div class="has-text-centered">
          <img class="footer-logo" src="../assets/img/eric-delia-logo-cropped.png" alt="Eric Delia">
          <div class="footer-links-padding">
            <a href="https://github.com/escodel" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ericdelia" target="_blank">
              <span class="icon">
                <i class="fa fa-linkedin"></i>
              </span>
            </a>
            <a href="https://twitter.com/metkovic_" target="_blank">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
            <a href="https://soundcloud.com/metkovic" target="_blank">
              <span class="icon">
                <i class="fa fa-soundcloud"></i>
              </span>
            </a>
          </div>
          <div class="is-size-7">
            &copy;2018
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false,
        activeItem: '/'
      }
    },
    mounted() {
      let route = this.$route.path
      let navItem = document.querySelector('.navbar-start > [href="' + route + '"]')
      navItem.classList.add('is-active')
    }
  }
</script>

<style>

</style>
