<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
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
    </div>

    <section>
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title underline">
              Work History
            </h2>
            <div v-for="workHistory in workHistories" :key="workHistory.id" class="box">
              <div class="columns">
                <figure class="column is-narrow">
                  <p class="image is-64x64">
                    <img :src="workHistory.img">
                  </p>
                </figure>
                <div class="column">
                  <div class="content has-text-left">
                    <p>
                      <span class="has-text-black-ter">{{ workHistory.company }}</span>
                      <br>
                      <span class="has-text-grey">
                        {{ workHistory.title }}
                      </span>
                      <br>
                      <span class="has-text-grey">
                        <span class="icon">
                          <i class="fa fa-map-marker"></i>
                        </span>
                        {{ workHistory.location }}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="column is-size-7 is-narrow">
                  <span class="icon">
                    <i class="fa fa-calendar"></i>
                  </span>
                  {{ workHistory.timeframe }}
                </div>
              </div>
              <hr>
              <div :class="workHistory.background">
                <section class="overlay-white">
              <article class="media">
                <div class="media-content">
                  <nav class="level">
                    <section class="level-left content">
                      <ul class="is-marginless">
                        <li v-for="responsibility in workHistory.responsibilities" :key="responsibility.id">{{ responsibility }}</li>
                      </ul>
                    </section>
                  </nav>
                </div>
              </article>
                </section>
              </div>
            </div>

            <!-- <h2 class="title underline">
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
              <ul>
                <li>HTML</li>
                <li>Handlebars</li>
              </ul>
            </div>
            <div v-if="(activeTab === 'CSS')">
              <ul>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
              </ul>
            </div>
            <div v-if="(activeTab === 'JavaScript')">
              JavaScript
            </div>
            <div v-if="(activeTab === 'Other')">
              <ul>
                <li>Git</li>
              </ul>
            </div> -->
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
                <p class="field"><span class="tag is-dark">Virginia Capital Semester</span></p>
                <p class="field"><span class="tag is-dark">Model United Nations</span></p>
                <p class="field"><span class="tag is-dark">International Scholar Laureate Program</span></p>
                <p class="field"><span class="tag is-dark">Golden Key Honour Society</span></p>
              </div>
            </article>
            <br>
            <h2 class="title underline">
              Industries
            </h2>
            <ul style="margin-left:2rem">
              <li>
                <span class="icon">
                  <i class="fa fa-building"></i>
                </span>
                State and Federal Government
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-plane"></i>
                </span>
                Aeronautics
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-money"></i>
                </span>
                Financial Services
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-lightbulb-o"></i>
                </span>
                Energy
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-cogs"></i>
                </span>
                Engineering
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-phone"></i>
                </span>
                Telecommunications
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-globe"></i>
                </span>
                Environmental Planning
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-bus"></i>
                </span>
                Transportation
              </li>
              <li>
                <span class="icon">
                  <i class="fa fa-users"></i>
                </span>
                Consulting
              </li>
            </ul>
            <br>
            <h2 class="title underline">
              Software
            </h2>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/jquery.png" title="jQuery">
                  </figure>
                  <p class="heading">
                    JQuery
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/css3.png" title="CSS3">
                  </figure>
                  <p class="heading">
                    CSS3
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/html5.png" title="HTML5">
                  </figure>
                  <p class="heading">
                    HTML5
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/sharepoint.png" title="SharePoint">
                  </figure>
                  <p class="heading">
                    SharePoint
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/bootstrap.png" title="Bootstrap">
                  </figure>
                  <p class="heading">
                    Bootstrap
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/git.png" title="Git">
                  </figure>
                  <p class="heading">
                    Git
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="https://vuejs.org" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/vue.png" title="Vue">
                  </figure>
                  <p class="heading">
                    Vue
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="https://nuxtjs.org" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/nuxt.png" title="Nuxt.js">
                  </figure>
                  <p class="heading">
                    Nuxt
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="https://bulma.io" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/bulma.png" title="Bulma CSS">
                  </figure>
                  <p class="heading">
                    Bulma
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/nodejs.png" title="NodeJS">
                  </figure>
                  <p class="heading">
                    Node
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/npm.png" title="npm">
                  </figure>
                  <p class="heading">
                    NPM
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/parceljs.jpg" title="Parcel">
                  </figure>
                  <p class="heading">
                    Parcel
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/gulp.png" title="Gulp">
                  </figure>
                  <p class="heading">
                    Gulp
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/js.png" title="ES6+">
                  </figure>
                  <p class="heading">
                    ES6+
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/babel.png" title="Babel">
                  </figure>
                  <p class="heading">
                    Babel
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/webpack.svg" title="Webpack">
                  </figure>
                  <p class="heading">
                    Webpack
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/sass.png" title="Sass">
                  </figure>
                  <p class="heading">
                    Sass
                  </p>
                </a>
              </div>
              <div class="level-item has-text-centered">
                <a href="#" target="_blank">
                  <figure class="image is-64x64">
                    <img src="../assets/img/vscode.svg" title="Visual Studio">
                  </figure>
                  <p class="heading">
                    VS
                  </p>
                </a>
              </div>
            </nav>
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
      activeTab: null,
      workHistories: [
        {
          company: 'Cardinal Solutions',
          img: require('../assets/img/cardinal_solutions.jpg'),
          timeframe: 'Aug. 2016 - Present',
          title: 'Senior Consultant',
          location: 'Raleigh, NC',
          background: 'bg-raleigh',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
        {
          company: 'Cardinal Solutions',
          img: require('../assets/img/cardinal_solutions.jpg'),
          timeframe: 'Aug. 2014 - Aug. 2016',
          title: 'Consultant',
          location: 'Raleigh, NC',
          background: 'bg-raleigh',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
        {
          company: 'URS Corporation',
          img: require('../assets/img/urs_corporation.jpg'),
          timeframe: 'Aug. 2013 - Aug. 2014',
          title: 'SharePoint / Web Developer',
          location: 'Raleigh, NC',
          background: 'bg-raleigh',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
        {
          company: 'Asurion',
          img: require('../assets/img/asurion.jpg'),
          timeframe: 'Apr. 2013 - Aug. 2013',
          title: 'SharePoint / Web Developer',
          location: 'Nashville, TN',
          background: 'bg-nashville',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
        {
          company: 'Asurion',
          img: require('../assets/img/asurion.jpg'),
          timeframe: 'Feb. 2012 - Apr. 2013',
          title: 'Content Administrator',
          location: 'Nashville, TN',
          background: 'bg-nashville',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
        {
          company: 'Capital One',
          img: require('../assets/img/capital_one.png'),
          timeframe: 'Mar. 2011 - Feb. 2012',
          title: 'Web Content Manager',
          location: 'Richmond, VA',
          background: 'bg-richmond',
          responsibilities: [
            'do this........................................',
            'do that',
            'etc'
          ]
        },
      ]
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
