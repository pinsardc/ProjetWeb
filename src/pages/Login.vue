<template>
    <form @submit.prevent="">
        <div>
            <label>Email:</label>
            <input type='email' autocomplete='username' v-model="username" id='email'/>
        </div>
        <div>
            <label>Password:</label>
            <input type='password' autocomplete='new-password' v-model="password" id='password' />
        </div>
        <input type="submit" v-on:click="login()" value="Login" >
    </form>
</template>

<script>
const axios = require('axios');//plutôt utiliser import (ne pas )
import router from '../router'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data: () => ({
    username: '',
    password: '',
    email: ''
  }),
  methods: {
    async login () {
      this.email = document.getElementById("email").value
      this.password = document.getElementById("password").value

      var self = this
      
      var headers = {
          'Content-Type': 'application/json'
      }
      var data = {
        email: this.email,
        password: this.password
      }
      await axios.post('http://localhost:4000/api/connect', data, {headers:headers}).then(function (response) {
        if (response.data.message === 'Vous êtes connecté !') {
          self.$storage.setStorageSync('username',response.data.username);
          self.$storage.setStorageSync('email',response.data.email);
          router.push('/Produits').catch(() => {})
        }
        else {alert(response.data.message)}
      })
    },
  }
}
</script>

<style>
div {
  margin: 3px;
}

label {
  display: inline-block;
  width: 100px;
}
</style>