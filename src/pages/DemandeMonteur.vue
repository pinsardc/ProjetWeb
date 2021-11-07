<template>
  <h2>Saisir adresse de montage</h2>
  <div>
    <input type="adresse" v-model="adresse" placeholder="Adresse" />
    <input type="codePostal" v-model="codePostal" placeholder="Code Postal" />
  </div>

  <h2>Date de montage</h2>
  <Datepicker v-model="date" aria-label="Date de montage"></Datepicker>

  <h2>Confirmation Adresse et Date de montage</h2>
  <div>
    <li>Adresse : {{ adresse }}</li>
    <li>Code postal : {{ codePostal }}</li>
    <li>Date : {{ date }}</li>
  </div>
  <input type="submit" v-on:click="valider()" value="Valider" >
</template>

<script>
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import router from "../router"

export default {
  name: "MontageOption",

  components: { Datepicker },
  setup() {
    const date = ref();
    const adresse = ref();
    const codePostal = ref();

    return {
      date,
      adresse,
      codePostal,
    };
  },
  methods: {
      valider() {
          alert("Vous avez bien validé votre commande !")
          router.push('/Produits').catch(() => {})
      }
  }
};
</script>

<style scoped>
div {
  width: 1000px;
  border: 2px solid royalblue;
  padding: 50px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
}

input {
  width: 250px;
  justify-items: center;
  text-align: center;
  border-radius: 2px solid black;
  padding: 1%;
  margin: 1%;
}
</style>