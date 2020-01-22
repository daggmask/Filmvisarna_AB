<template>
  <div id="menu">
    <nav class="transparentBackground container">
      <div class="nav-wrapper transparentBackground" id="navBar">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger left"
          ><i
            class="material-icons"
            target-data="mobile-links"
            @click="displayMobile"
            >menu</i
          ></a
        >
        <ul class="left hide-on-med-and-down container">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movielist">Filmer</router-link></li>
          <li><router-link to="/about">Om oss</router-link></li>
          <li><router-link to="/">Hitta hit</router-link></li>
        </ul>
      </div>
    </nav>
    <div v-if="isOpen" class="hide-on-large-only container">
      <ul class="sidenav" id="mobile-links">
        <li @click="displayMobile">
          <router-link class="mobileLink" to="/">Home</router-link>
        </li>
        <li @click="displayMobile">
          <router-link class="mobileLink" to="/movielist">Filmer</router-link>
        </li>
        <li @click="displayMobile">
          <router-link class="mobileLink" to="/about">Om oss</router-link>
        </li>
        <li @click="displayMobile">
          <router-link class="mobileLink" to="/">Hitta hit</router-link>
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
  transform: translate(0%, 8.5em);
  height: 90vh;
  width: 100vw;
  background-color: #000000c7;
}
.mobileLink {
  font-size: 1.5em;
  margin: 1em;
  color: white;
}
.contaienr{
  display: flex;
}
.transparentBackground {
  background-color: #1b456400;
}
</style>
