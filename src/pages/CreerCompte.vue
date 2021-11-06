<template>
  <div>
    <h2>Se créer un compte</h2>
    <form submit.prevent="">
      <input v-model="email" id="email" placeholder="email" />
      <input v-model="username" id="username" placeholder="username" />
      <input v-model="password" type="password" id="password" placeholder="password" />
      <input type="confirm_password" id="confirm_password" placeholder="Comfirmez votre mot de passe" />
      <button type="submit" v-on:click="CreerCompte()">S'inscrire</button>
    </form>
  </div>
</template>

<script>
const axios = require('axios');//plutôt utiliser import (ne pas )
import router from '../router'

export default {
  name: 'CreerCompte',
  props: {
    msg: String
  },
  data: () => ({
    username: '',
    password: '',
    email: ''
  }),
  methods: {
    async CreerCompte () {
      this.username = document.getElementById("username").value
      this.password = document.getElementById("password").value
      this.email = document.getElementById("email").value

      if (this.password == document.getElementById("confirm_password").value) {
        alert("Les deux mots de passes sont différents")
        return null;
      }
      
      var headers = {
          'Content-Type': 'application/json'
      }
      var self = this

      var data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      await axios.post('http://localhost:4000/api/CreateAccount', data, {headers:headers}).then(function (response) {
          console.log(self)
          console.log(self.$session)
        if (response.data.message === "Votre compte a bien été enregistré") {
          self.$storage.setStorageSync('username',response.data.username);
          self.$storage.setStorageSync('email',response.data.email);
          router.push('/Login').catch(() => {})
        }
        alert(response.data.message)
      })
  },
  }
}
</script>

<style scoped>
.form {
  justify-content: center;
}

button {
  border-radius: 5px;
  background-color: greenyellow;
}

input {
  width: 250px;
  border-radius: 5px;
  justify-content: center;
  margin: auto;
  margin-bottom: 5px;
  display: grid;
}
</style>