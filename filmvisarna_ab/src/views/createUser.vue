<template>
<div class="loginPage row container ">
<div class="card medium center-block center-align ">
<form class="login-form">

  <div class="login-input">
  <label for="username">Användarnamn</label>
  <input v-model="user.name" type="email" required>
  </div>

  <br>

   <div class="login-input">
  <label for="passWord">Lösenord</label>
  <input placeholder="lösenord" v-model="user.pass" type="password" required>

  

  </div>

  <br>

  <button type="button" @click="createUser" class="btn waves-effect waves-light" >Skapa Konto</button>



</form>
</div>
</div>
</template>

<script>
export default{
    data(){
        return{
            user:{
            name: '',
            pass: ''
            }
        }
    },
methods:{
    createUser(){
        let name = this.user.name;
        let pass = this.user.pass;
        this.user.name=name
        this.user.pass=pass
        console.log(name, pass)


        console.log(this.user.pass, this.user.name)
        this.$store.dispatch('createUser', this.user)
    }
}
}

</script>
<style scoped>
input{
    color: black
}

</style>