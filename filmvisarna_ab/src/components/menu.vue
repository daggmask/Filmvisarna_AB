<template>
  <div id="menu" class="sticky">
    <nav class="transparentBackground container">
      <div class="nav-wrapper transparentBackground sticky" id="navBar">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger left">
          <i
            class="material-icons hide-on-large-only"
            target-data="mobile-links"
            @click.prevent="displayMobile"
          >menu</i>
        </a>
        <ul class="left hide-on-med-and-down container">
          <li>
            <router-link to="/">Hem</router-link>
          </li>
          <li>
            <router-link to="/movies">Filmer</router-link>
          </li>
          <li>
            <router-link to="/about">Om oss</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="isOpen" class="hide-on-large-only container">
      <ul class="sidenav" id="mobile-links">
        <li @click.prevent="displayMobile">
          <router-link class="mobileLink" to="/">Hem</router-link>
        </li>
        <li @click.prevent="displayMobile">
          <router-link class="mobileLink" to="/movies">Filmer</router-link>
        </li>
        <li @click.prevent="displayMobile">
          <router-link class="mobileLink" to="/about">Om oss</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    displayMobile() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style scoped>
#mobile-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0%, 8.2em);
  height: 90vh;
  width: 100vw;
  background-color: #000000fa;
}
.mobileLink {
  font-size: 1.5em;
  margin: 1em;
  color: white;
}
.contaienr {
  display: flex;
}
.transparentBackground {
  background-color: #1b456400;
}
#menu {
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  z-index: 999;
}
#menu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
}
.sticky {
  position: sticky;
  top: 0em;
  width: 100%;
}
.sticky + .content {
  padding-top: 0px;
}
</style>
