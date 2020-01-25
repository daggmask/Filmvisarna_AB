<template>
  <div class="sticky">
    <nav class="nav-wrapper navbar">
      <span class="open-slide">
        <i class="material-icons hide-on-large-only hamburger" @click.prevent="openSlideMenu">menu</i>
      </span>
      <ul class="hide-on-med-and-down navbar-nav container">
        <li class="navbar-link">
          <router-link to="/">Hem</router-link>
        </li>
        <li class="navbar-link">
          <router-link to="/movies">Filmer</router-link>
        </li>
        <li class="navbar-link">
          <router-link to="/about">Om oss</router-link>
        </li>
      </ul>
    </nav>
    <div id="side-menu" class="side-nav">
      <div class="side-menu-links container">
        <ul class="links-list container">
          <li class="mobile-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="mobile-link" to="/">Hem</router-link>
            </a>
          </li>
          <li class="mobile-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="mobile-link" to="/movies">Filmer</router-link>
            </a>
          </li>
          <li class="mobile-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="mobile-link" to="/about">Om oss</router-link>
            </a>
          </li>
          <a href="#" class="btn-close material-icons mobile-link" @click.prevent="closeSlideMenu">close</a>
        </ul>
      </div>
    </div>
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  methods: {
    openSlideMenu() {
      document.getElementById("side-menu").style.height = "130%";
    },
    closeSlideMenu() {
      document.getElementById("side-menu").style.height = "0";
    }
  }
};
</script>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
}
.navbar a {
  display: block;
  color: #f2f2f2;
  font-family: 'Monoton', cursive;
  text-decoration: none;
  font-size: 2vh;
  width: 7.5vw;
}
.navbar ul {
  justify-content: space-between;
  width: 25%;
}
.navbar a:hover {
  background-color: rgba(46, 46, 46, 0.100);
  font-size: 2.5vh;
}
.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.932);
  overflow: hidden;
  padding-top: 60px;
  transition: 1s;
}
.side-menu-links {
  height: 70%;
  width: 70%;
  justify-content: space-around;
  flex-direction: column;
}
.container {
  display: flex;
}
#side-menu {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -9.3vh;
  height: 0;
}
.mobile-link {
  color: white;
  font-size: 3.5vh;
  margin: 0.7em;
}
.links-list {
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
}
.btn-close {
  margin-top: 45%;
  font-size: 4em;
}
.sticky {
  position: sticky;
  top: 0vh;
  width: 100%;
  padding-top: 0em;
}
.sticky .side-nav {
  padding-top: 1em;
}
.hamburger {
  margin-left: 5%;
  margin-top: 0.5%;
  cursor: pointer;
}
</style>