<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">
          Eric Delia
        </h1>
        <h2 class="subtitle">
          <a href="mailto:escodel@gmail.com">
            escodel@gmail.com
          </a>
        </h2>
      </div>
    </div>

    <section>
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <h2 class="title underline">
              Who I am
            </h2>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec eleifend erat, eu pharetra ante. Donec sit amet lacus feugiat, laoreet nulla id, accumsan mauris. Sed lectus sapien, aliquam sit amet sapien eu, vulputate elementum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tellus quam, sagittis a mi eu, iaculis accumsan nibh. Morbi vel accumsan magna, a commodo massa. Sed aliquet nisi maximus, ullamcorper ante non, ullamcorper odio. Nam in elit nec libero semper sodales a nec nulla.
              </p>
            </div>
            <h2 class="title underline">
              Skills
            </h2>
            <div class="tabs is-centered">
              <ul>
                <li v-for="tab in tabs" :key="tab.id" :class="{ 'is-active' : (tab.name === activeTab) }">
                  <a @click.prevent="setActiveTab(tab.name)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>
            <div v-if="(activeTab === 'HTML')">
              HTML
            </div>
            <div v-if="(activeTab === 'CSS')">
              <ul>
                <li>CSS3</li>
                <li>Bootstrap4</li>
                <li>Bulma CSS</li>
              </ul>
            </div>
            <div v-if="(activeTab === 'JavaScript')">
              JavaScript
            </div>
            <div v-if="(activeTab === 'Other')">
              Other
            </div>
          </div>
          <div class="column is-narrow">
            <h2 class="title underline">
              Education
            </h2>
            <article class="media">
              <figure class="media-left">
                <p class="image is-96x96">
                  <img src="../assets/img/VCU_Rams.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    Virginia Commonwealth University<br>
                    B.A. Political Science, 2007<br>
                    <em>Cum Laude</em>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: 'HTML'
        },
        {
          name: 'CSS'
        },
        {
          name: 'JavaScript'
        },
        {
          name: 'Other'
        }
      ],
      activeTab: null
    }
  },
  mounted() {
    this.activeTab = this.tabs[0].name
  },
  methods: {
    setActiveTab(name) {
      this.activeTab = name
    }
  }
}
</script>
