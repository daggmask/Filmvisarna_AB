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
      
      <router-link to="/create_user">
      <h7>Skapa konto</h7>
      </router-link>
    </form>
    </div>
  </div>
</template>

<script>
export default{
    
    data(){
        return{
        form: {
        email: "",
        password: ""
      }
     }
    },
     methods: {
    submit() {
      this.$store.dispatch('loginUser', this.form)
      console.log(this.$store.state.user.loggedIn)
      if(this.$store.state.user.loggedIn){
      this.$router.replace({ name: "homePage" });
      }
    },
  }
};
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');

.login{
    background-color: transparent;
    margin-top: 5%
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