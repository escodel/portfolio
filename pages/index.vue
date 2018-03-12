<template>
  <div>
    <!-- <app-logo/> -->
    <div class="hero is-primary">
      <div class="hero-body">
        <article class="media container">
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
                front-end developer, musician
              </h2>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="hero is-light">
      <div class="hero-body is-size-5 container">
        Senior consultant with seven years' experience developing for the web, 10+ years in a variety of industries. Travels have included UI/UX design, web/enterprise content management, technical/creative writing, and building brand awareness.
      </div>
    </div>

    <section class="container">
      <div class="columns has-text-centered">
        <div class="column">
          <span class="icon is-large">
            <i class="fa fa-map-signs fa-3x highlight"></i>
          </span>
          <section>
            <h2 class="title">
              Strategy
            </h2>
            <p class="has-text-justified">
              From gathering requirements to guiding junior team members to leading strategy for corporate intranet to development process improvement for large organizations, it all begins with a roadmap.
            </p>
          </section>
        </div>
        <div class="column">
          <span class="icon is-large">
            <i class="fa fa-pencil fa-3x highlight"></i>
          </span>
          <section>
            <h2 class="title">
              Design
            </h2>
            <p class="has-text-justified">
              Designing wireframes and crafting user experience journeys, collecting iterative feedback from clients and refining their needs into actionable objectives.
            </p>
          </section>
        </div>
        <div class="column">
          <span class="icon is-large">
            <i class="fa fa-code-fork fa-3x highlight"></i>
          </span>
          <section>
            <h2 class="title">
              Code
            </h2>
            <p class="has-text-justified">
              Where the rubber meets the road. Building sites and applications using the pillars of front-end development (HTML, CSS, JavaScript), while leveraging the latest frameworks and libraries for bleeding-edge features.
            </p>
          </section>
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
