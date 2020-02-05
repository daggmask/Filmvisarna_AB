<template>
<div>
    <h1>Register</h1>
    <form action="#" @submit.prevent="submit">
      <div class="input-field">
        <input id="name" type="text" name="name" value required autofocus v-model="form.name" />
        <label for="name">Name</label>
      </div>

      <div class="input-field">
        <input id="email" type="email" name="email" value required autofocus v-model="form.email" />
        <label for="email">Email</label>
      </div>

      <div class="input-field">
        <input id="password" type="password" name="password" required v-model="form.password" />
        <label for="password">Password</label>
      </div>

      <div class="input-field">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default{
    
    data(){
        return{
        form: {
        name: "",
        email: "",
        password: ""
      }
     }
    },
methods:{
       submit() {
      this.$store.dispatch('registerUser', this.form)
      this.$router.replace({ name: "homePage" });
    }
 
}
}

</script>
<style scoped>


</style>