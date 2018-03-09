<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="http://via.placeholder.com/150x50" alt="Eric Delia">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
          <a class="navbar-item" href="/about">
            About
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/escodel">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://twitter.com/metkovic_">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item" href="https://soundcloud.com/metkovic">
          <span class="icon">
            <i class="fa fa-soundcloud"></i>
          </span>
        </a>
      </div>

      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

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
