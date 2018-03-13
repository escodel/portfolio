<template>
  <div>
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
    <nuxt/>
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
