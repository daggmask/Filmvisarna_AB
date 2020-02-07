<template>
<div class="backgroundColour">
<div class="headerDiv container row valign-wrapper">
  <div class="col s2 l8">
    <Menu id="navbar"></Menu>
    </div>
    <div class="col s10 l12">
    <router-link to='/'>
      <h1 class="center-align">FILMVISARNA</h1>
    </router-link>
    </div>
    <div v-if="user.loggedIn" class="userName center-align valign-wrapper">
      <span>{{user.data.displayName}}</span>
      </div>
    <div class="loginIcon col s2 l8 right-align">
     <a
      href="login"
      class="btn-close material-icons user"
      >account_circle</a>
      

    </div>
     <template v-if="user.loggedIn">
          <li>
            <p class="sign-out" @click.prevent="signOut">Logga ut</p>
          </li>
        </template>
  </div>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue';
import auth from '@/firebase.js'
import firebase from "firebase";
export default{
  components:{
    Menu
  },

   computed: {
    user(){
      return this.$store.state.user
    }
  },

methods: {
     async signOut() {
      let result = await firebase.auth().signOut()
      let isLoggedIn=this.$store.state.user.loggedIn;
      console.log(isLoggedIn)
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');

*{
  box-sizing: border-box;
}
.headerDiv{
  width: 100vw;
  background-color: #01579b;
}
#navbar{
  z-index: 999;
  
}
.backgroundColour{
  height: 8.5vh;
  background-color: #01579b;
  background-size: cover;
}
h1{
  font-family: 'Monoton', cursive;
  margin-top:0%;
  margin-bottom: 0%;
  cursor:pointer;
  font-size: 2em;
}
.material-icons{
  font-size: 60PX;
}
.user{
  margin-top: 1.5vh;
}
li{
  list-style: none;
}
.userName{
   display: inline-block;
}
.loginIcon{
  width: 11% !important;
}
.sign-out:hover{
cursor: pointer;
}

</style>