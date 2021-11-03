<template>
    <div id="app">
    <header>
      <img src="../../public/InfostonksLogo.png">
      <h1>Infostonks pour stonks votre travail ou vos parties !</h1>
      <nav>
        <router-link to='/'><i class="fa fa-home" aria-hidden="true"></i> Accueil</router-link>
        <router-link to='/Login'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Connexion</router-link>
        <router-link to='/test'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Panier</router-link>
        <router-link to='/Produits'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Produits</router-link>
        <router-link to='/CreerCompte'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Créer un compte</router-link>
        

      </nav>
    </header>
    <main>
      <router-view>
      </router-view>
    </main>
  </div>
</template>

<script>
//import router from '../router/index.js';

export default {
  name: 'BaseHeader',
  props: {
  },
  
  methods: {
      goToTest: function () {
        console.log("zefpjzfi")
        this.$router.push('/test').catch(() => {})
    },
      
  },
}
</script>


<style>
  #app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-box-font-sizing: grayscale;
  }

  header {
    background-color: rgba(64, 64, 122, 1.0);
    padding: 2%;
  }

  nav a {
    color: white;
    margin-left: 1.5%;
    display: block;
    font-size: 20px;
    text-decoration: none;
    justify-content: space-between;
  }

  nav a:hover {
    color: rgb(35, 141, 202);
  }

  nav a.router-link-exact-active {
    color: rgb(35, 141, 202);
  }

  h1 {
    text-align: left;
    font-size: 60px;
    margin-left: 1%;
    color: white;
    text-shadow: 1px 1px 1px black;
    text-align: center;
  }
</style>