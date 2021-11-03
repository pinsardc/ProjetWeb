<template>
        <div>
        <h2 ALIGN="CENTER">Registration form</h2>
        <form @submit.prevent="">
        <table border="0" align="center">
        <tbody>

        <tr>
        <td><label for="id">Id: </label></td>
        <td><input id="id" maxlength="50" name="name" type="text" /></td>
        </tr>

        <tr>
        <td><label for="name">Name: </label></td>
        <td><input id="name" maxlength="50" name="name" type="text" /></td>
        </tr>

        <tr>
        <td><label for="course">Course: </label></td>
        <td><input id="course" maxlength="50" name="course" type="text" /></td>
        </tr>

        <tr>
        <td><label for="branch">Branch: </label></td>
        <td><input id="branch" maxlength="50" name="branch" type="text" /></td>
        </tr>

        <tr>
        <td><label for="rolln0">Rollno: </label></td>
        <td><input id="rollno" maxlength="50" name="rollno" type="text" /></td>
        </tr>

        <tr>
        <td><label for="email">Email_Address:</label></td>
        <td><input id="email" maxlength="50" name="email" type="text" /></td>
        </tr>

        <tr>
        <td><label for="username">User_Name:</label></td>
        <td><input id="username" maxlength="50" name="username" type="text" /></td>
        </tr>

        <tr>
        <td><label for="aboutus">About Us:</label></td>
        <td valign="middle" align="center"><textarea></textarea></td>
        </tr>

        <tr>
        <td><label for="password">Password:</label></td>
        <td><input id="password" maxlength="50" name="password"
        type="password" /></td>
        </tr>

        <tr>
        <td align="right"><input name="Submit" v-on:click="CreerCompte()" type="Submit" value="Add" /></td>
        </tr>

        </tbody>
        </table>

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

<style>
</style>