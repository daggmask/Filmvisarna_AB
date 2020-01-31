<template>
  <div class="sticky">
    <nav class="nav-wrapper navbar">
      <span class="open-slide">
        <i
          class="material-icons hide-on-large-only hamburger"
          @click.prevent="openSlideMenu"
          >menu</i
        >
      </span>
      <ul class="hide-on-med-and-down container">
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
    <div id="tablet-menu">
      <div class="tablet-menu-links container">
        <ul class="tablet-links-list container">
          <li class="tablet-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="tablet-link" to="/">Hem</router-link>
            </a>
          </li>
          <li class="tablet-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="tablet-link" to="/movies">Filmer</router-link>
            </a>
          </li>
          <li class="tablet-link">
            <a href="#" @click.prevent="closeSlideMenu">
              <router-link class="tablet-link" to="/about">Om oss</router-link>
            </a>
          </li>
          <a
            href="#"
            class="btn-close material-icons"
            @click.prevent="closeSlideMenu"
            >close</a
          >
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
      document.getElementById("tablet-menu").style.height = "100vh";
    },
    closeSlideMenu() {
      document.getElementById("tablet-menu").style.height = "0";
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.sticky {
  position: sticky;
  top: 0vh;
}
.navbar {
overflow: hidden;
background: transparent;
}
nav{
    -webkit-box-shadow: 0 0 0 0 !important;
}
.navbar-link a {
  display: block;
  color: #f2f2f2;
  font-family: "Monoton", cursive;
  text-decoration: none;
  font-size: 2vh;
  width: 100%;
  margin-left: 1vw;
}
.navbar-link :hover {
  color: white;
  text-shadow: #f2f2f2 3rem;
}
#tablet-menu {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.932);
  overflow: hidden;
  transition: 0.65s;
}
.tablet-menu-links {
  height: 70vh;
  width: 70vw;
  justify-content: space-between;
  flex-direction: column;
}
.tablet-links-list {
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25vh;
}
.tablet-link {
  font-family: "Monoton", cursive;
  color: white;
  font-size: 3.5vh;
  margin: 1em;
}
.hamburger {
  margin-left: 5vw;
  cursor: pointer;
  width: 7.5vw;
  height: 7.5vh;
}
.btn-close {
  margin-top: 10vh;
  font-size: 3.5em;
  color: white;
  border: 1px solid white;
  border-radius: 100%;
}
</style>
