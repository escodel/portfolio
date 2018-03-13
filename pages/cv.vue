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
                <p class="field"><span class="tag is-primary">Virginia Capital Semester</span></p>
                <p class="field"><span class="tag is-primary">Model United Nations</span></p>
                <p class="field"><span class="tag is-primary">International Scholar Laureate Program</span></p>
                <p class="field"><span class="tag is-primary">Golden Key Honour Society</span></p>
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
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(0,3)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(3,6)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(6,9)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(9,12)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(12,15)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
                  </p>
                </a>
              </div>
            </nav>
            <nav class="level">
              <div class="level-item has-text-centered" v-for="technology in technologies.slice(15,18)" :key="technology.id">
                <a :href="technology.link" target="_blank">
                  <figure class="image is-64x64">
                    <img :src="technology.logo" :title="technology.title">
                  </figure>
                  <p class="heading">
                    {{ technology.displayName }}
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
      ],
      technologies: [
        {
          displayName: 'HTML5',
          title: 'HTML5',
          link: '#',
          logo: require('../assets/img/html5.png')
        },
        {
          displayName: 'CSS3',
          title: 'CSS3',
          link: '#',
          logo: require('../assets/img/css3.png')
        },
        {
          displayName: 'ES6+',
          title: 'JavaScript',
          link: '#',
          logo: require('../assets/img/js.png')
        },
        {
          displayName: 'Vue',
          title: 'Vue',
          link: '#',
          logo: require('../assets/img/vue.png')
        },
        {
          displayName: 'Nuxt',
          title: 'Nuxt',
          link: '#',
          logo: require('../assets/img/nuxt.png')
        },
        {
          displayName: 'Bulma',
          title: 'Bulma',
          link: '#',
          logo: require('../assets/img/bulma.png')
        },
        {
          displayName: 'Node',
          title: 'Node',
          link: '#',
          logo: require('../assets/img/nodejs.png')
        },
        {
          displayName: 'Npm',
          title: 'npm',
          link: '#',
          logo: require('../assets/img/npm.png')
        },
        {
          displayName: 'Git',
          title: 'Git',
          link: '#',
          logo: require('../assets/img/git.png')
        },
        {
          displayName: 'Webpack',
          title: 'Webpack',
          link: '#',
          logo: require('../assets/img/webpack.svg')
        },
        {
          displayName: 'Parcel',
          title: 'Parcel',
          link: '#',
          logo: require('../assets/img/parceljs.jpg')
        },
        {
          displayName: 'Gulp',
          title: 'Gulp',
          link: '#',
          logo: require('../assets/img/gulp.png')
        },
        {
          displayName: 'Bootstrap',
          title: 'Bootstrap',
          link: '#',
          logo: require('../assets/img/bootstrap.png')
        },
        {
          displayName: 'Sass',
          title: 'Sass',
          link: '#',
          logo: require('../assets/img/sass.png')
        },
        {
          displayName: 'jQuery',
          title: 'jQuery',
          link: '#',
          logo: require('../assets/img/jquery.png')
        },
        {
          displayName: 'Babel',
          title: 'Babel',
          link: '#',
          logo: require('../assets/img/babel.png')
        },
        {
          displayName: 'SharePoint',
          title: 'SharePoint',
          link: '#',
          logo: require('../assets/img/sharepoint.png')
        },
        {
          displayName: 'VS',
          title: 'Visual Studio',
          link: '#',
          logo: require('../assets/img/vscode.svg')
        }
      ]
    }
  }
}
</script>
