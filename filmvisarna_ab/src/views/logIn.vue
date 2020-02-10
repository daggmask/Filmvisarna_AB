<template>
<div class="container col login">
    <div class="center-block center-align">
    <h1 class="black"> LOGGA <br> IN</h1>
    <form action="#" @submit.prevent="submit">
      <div class="input-field">
        <input id="email" type="email" name="email" value required autofocus v-model="form.email" />
        <label for="email">Email</label>
      </div>

      <div class="input-field">
        <input id="password" type="password" name="password" required v-model="form.password" />
        <label for="password">Lösenord</label>
      </div>

      <div class="input-field">
        <button type="submit" class="btn waves-effect waves-light" >Logga in</button>
      </div>
      
      <div>
        <p>
          {{this.loginMessage}}
        </p>
      </div>

      <router-link to="/create_user">
      <h6>Skapa konto</h6>
      </router-link>
    </form>
    </div>
  </div>
</template>

<script>
import {auth} from "@/firebase.js"
export default{
    
    data(){
        return{
        loginMessage: "",
        form: {
        email: "",
        password: ""
      }
     }
    },
     methods: {
    async submit() {
        let result = await auth.signInWithEmailAndPassword(this.form.email, this.form.password).catch(console.error)
        if(result){
          this.$store.dispatch('fetchUser', result.user)
        }
      let isLoggedIn = this.$store.state.user.loggedIn
      console.log(isLoggedIn)
      if(isLoggedIn){
        this.$router.replace({ name: "homePage" });
      }else{
        this.loginMessage = "Fel användarnamn eller lösenord"
      }
      
    },
  }
};
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
.login{
    background-color: transparent;
}
h1{
    font-family: 'Monoton', cursive;
    font-size: 3rem;
}
button{
    background-color: #01579b;
}
label{
  color: white;
}
</style>