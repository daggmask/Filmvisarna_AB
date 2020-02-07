<template>
  <div class="main">
    <header
      class="backgroundColour row  header light-blue darken-4 valign-wrapper"
      :class="{ 'hidden-header': !showheader }"
    >
      <div class="col s2 m4 l5 xl5 valign-wrapper ">
        <ul class="valign-wrapper ">
          <li>
            <i class="material-icons hide-on-large-only " @click="openSlideMenu"
              >menu</i
            >
          </li>
          <li>
            <router-link class="col hide-on-med-and-down desktop-link" to="/"
              >Hem</router-link
            >
          </li>
          <li>
            <router-link
              class="col hide-on-med-and-down desktop-link"
              to="/movies"
              >Filmer</router-link
            >
          </li>
          <li>
            <router-link
              class="col hide-on-med-and-down desktop-link"
              to="/about"
              >Om oss</router-link
            >
          </li>
        </ul>
      </div>

      <div class="col s8 m4 l2 xl2 valign-wrapper">
        <router-link to="/"
          ><h1 class="col container center-align">Filmvisarna</h1></router-link
        >
      </div>

      <div class="col s2 m4 l5 xl5 valign-wrapper ">
        <router-link to="/login"
          ><i class="col material-icons account-icon"
            >account_circle</i
          ></router-link
        >
      </div>

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
                <router-link class="tablet-link" to="/movies"
                  >Filmer</router-link
                >
              </a>
            </li>
            <li class="tablet-link">
              <a href="#" @click.prevent="closeSlideMenu">
                <router-link class="tablet-link" to="/about"
                  >Om oss</router-link
                >
              </a>
            </li>
            <a href="#" class="material-icons" @click.prevent="closeSlideMenu">
              <i class="material-icons btn-close">close</i></a
            >
          </ul>
        </div>
        <div class="space hide-on-large-only"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showheader: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    openSlideMenu() {
      document.getElementById("tablet-menu").style.height = "107.5vh";
    },
    closeSlideMenu() {
      document.getElementById("tablet-menu").style.height = "0";
    },
    onScroll() {
      if (window.pageYOffset < 5) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 5) {
        return;
      }
      this.showheader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: function() {
        this.showheader = true;
        return this.onScroll();
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");

.container {
  flex-direction: column;
}
.main {
  height: 7.5vh;
}
h1 {
  font-family: "Monoton", cursive;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.55rem;
}
.header {
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.35s all ease-out;
  z-index: 999;
}
#tablet-menu {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.932);
  overflow: hidden;
  transition: 0.65s;
}
.tablet-menu-links {
  height: 70vh;
  width: 90vw;
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
  font-size: 1.35em;
  margin: 1em;
}
.desktop-link {
  font-family: "Monoton", cursive;
  color: white;
  font-size: 1.1em;
  margin: 1em;
}
.btn-close {
  margin-top: 10vh;
  font-size: 2.5em;
  color: white;
  border: 1px solid white;
  border-radius: 100%;
}
.account-icon {
  font-size: 2.5rem;
}
.header.hidden-header {
  transform: translate3d(0, -100%, 0);
}
</style>
