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
                <figure class="media-left">
                  <p class="image is-64x64">
                  </p>
                </figure>
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
                  <nav class="panel">
                    <div class="panel-block">Virginia Capital Semester</div>
                    <div class="panel-block">Model United Nations</div>
                    <div class="panel-block">International Scholar Laureate Program</div>
                    <div class="panel-block">Golden Key Honour Society</div>
                  </nav>
                </div>
              </div>
            </article>

            <h2 class="title underline">
              Industries
            </h2>
            <ul>
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
