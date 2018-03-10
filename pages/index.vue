<template>
  <div>
    <!-- <app-logo/> -->
    <div class="hero is-primary">
      <div class="hero-body">
        <article class="media">
          <figure class="media-left">
            <p class="image is-96x96">
              <img src="../assets/img/escodel-527.png" class="img-circular">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h1 class="title">
                Eric Delia
              </h1>
              <h2 class="subtitle">
                Front-end developer, musician
              </h2>
            </div>
          </div>
        </article>
      </div>
    </div>

    <section>
      <div class="columns has-text-centered">
        <div class="column">
          <span class="icon is-large">
            <i class="fa fa-map-signs fa-3x highlight"></i>
          </span>
        </div>
        <div class="column">
          <span class="icon is-large">
            <i class="fa fa-map-signs fa-3x highlight"></i>
          </span>
        </div>
        <div class="column">
          <span class="icon is-large">
            <i class="fas fa-code-branch fa-3x highlight"></i>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

</style>
