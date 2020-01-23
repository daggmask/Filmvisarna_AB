<template>
  <div id="menu" class="sticky">
    <nav class="navContainer">
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
            <router-link class="desktopLinks" to="/">Hem</router-link>
          </li>
          <li>
            <router-link class="desktopLinks" to="/movies">Filmer</router-link>
          </li>
          <li>
            <router-link class="desktopLinks" to="/about">Om oss</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="isOpen" class="hide-on-large-only mobileNavcontainer">
      <ul class="sidenav" id="mobileNav">
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
#mobileNav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0%, 9.25em);
  height: 90vh;
  width: 100vw;
  background-color: #000000fa;
}
.mobileLink {
  font-size: 2em;
  font-family: "Monoton", cursive;
  margin: 1em;
  color: white;
}
.desktopLinks {
  font-size: 2em;
  font-family: "Monoton", cursive;
  margin: 0.3em;
  color: white;
}
.navContainer {
  background-color: #1b456400;
}
#menu {
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  z-index: 999;
}
.sticky {
  position: sticky;
  top: 0em;
  width: 100%;
  padding-top: 0em;
}
.sticky #mobileNav {
  padding-top: 0em;
}
</style>
