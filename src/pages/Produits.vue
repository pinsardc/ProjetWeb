<template>
  <div v-for="product in products" :key="product">
    <div>
        <img v-bind:src="product.img" />
        <h3>{{ product.description }}</h3>
        <span>{{ product.price }}€</span>
        <button v-on:click="AjouterPanier()">ajouter panier</button>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    description: "MSI GF63 10SCSR 1631FR THIN GTX 1650Ti",
    price: 950,
    img: "assets/img/msi-gf63-10scsr-1631fr-thin-gtx-1650ti.png",
  },
  {
    id: 2,
    description: "Gigabyte G5 KC-5FR2130SH",
    price: 1250,
    img: "assets/img/gigabyte-g5-kc-5fr2130sh.png",
  },
  {
    id: 3,
    description: "Gigabyte Aero 17 HDR YC-9FR5760SP 4K / RTX 3080",
    price: 4799,
    img: "assets/img/gigabyte-aero-17-hdr-yc-9fr5760sp-4k-rtx-3080.jpg",
  },
  {
    id: 4,
    description: "Gigabyte Aero 17 HDR YC-9FR5760SP 4K / RTX 3080",
    price: 4799,
    img: "assets/img/gigabyte-aero-17-hdr-yc-9fr5760sp-4k-rtx-3080.jpg",
  },
];
export default {};
</script>

<style>
</style>