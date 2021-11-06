<template>
{{ products.type }}
    <div id=panier>
        <button id=panier_button v-on:click="this.montrerPanier = this.montrerPanier ? false : true;">
            Panier<!--Je voulais faire !this.montrerPanier mais ca ne fonctionnait pas-->
        </button>
        <div v-if="montrerPanier">
            <div id=panier_liste v-for="product in this.panier" :key="product">
                <img :src="require(`@/assets/img/${product.img}`)"/>
                <h3>{{ product.description }}</h3>
                <span>{{ product.price }}€</span>
                <button v-on:click="supprimer(product)">Supprimer</button>
            </div>
            <button v-if="this.panier.length>0" v-on:click="acheter()">Acheter</button>
            
            <div id=panier_vide v-if="this.panier.length==0">
                Le panier est vide
            </div>
        </div>
    </div>
  <div v-for="product in products" :key="product">
    <div>
        <img :src="require(`@/assets/img/${product.img}`)"/>
        <h3>{{ product.description }}</h3>
        <span>{{ product.price }}€</span>
        <button v-on:click="AjouterPanier(product)">ajouter panier</button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');//plutôt utiliser import (ne pas )
export default {
    data() {
        return {
        montrerPanier : false,
        products : [
        {
            id: 1,
            description: "MSI GF63 10SCSR 1631FR THIN GTX 1650Ti",
            price: 950,
            img: "msi-gf63-10scsr-1631fr-thin-gtx-1650ti.png",
        },
        {
            id: 2,
            description: "Gigabyte G5 KC-5FR2130SH",
            price: 1250,
            img: "gigabyte-g5-kc-5fr2130sh.png",
        },
        {
            id: 3,
            description: "Gigabyte Aero 17 HDR YC-9FR5760SP 4K / RTX 3080",
            price: 4799,
            img: "gigabyte-aero-17-hdr-yc-9fr5760sp-4k-rtx-3080.jpg",
        },
        {
            id: 4,
            description: "Gigabyte Aero 17 HDR YC-9FR5760SP 4K / RTX 3080",
            price: 4799,
            img: "gigabyte-aero-17-hdr-yc-9fr5760sp-4k-rtx-3080.jpg",
        },
        ],
        panier : []
        }
    },
    mounted: function(){
        if (typeof this.$storage.getStorageSync('panier') == 'undefined') {
            this.$storage.setStorageSync('panier',[])
        }
        for (var i = 0; i < this.$storage.getStorageSync('panier').length; i++) {
            this.panier.push(this.$storage.getStorageSync('panier')[i])
        }
    },
    methods:{

        AjouterPanier(prod) {
            this.panier.push(prod);
            this.$storage.setStorageSync('panier',this.panier)
        },
        supprimer(prod) {
            this.panier.splice(this.panier.indexOf(prod), 1)
            this.$storage.setStorageSync('panier',this.panier)
        },
        async acheter() {

            var self = this
            
            var headers = {
                'Content-Type': 'application/json'
            }
            var data = {
                products: this.panier
            }
            await axios.post('http://localhost:4000/api/purchase', data, {headers:headers}).then(function (response) {
                var ruptureList = self.products.filter(item => response.data.ruptureList.includes(item.id))
                self.$storage.setStorageSync('panier',ruptureList)
                self.panier = ruptureList
                ruptureList = ruptureList.map(x => x.description)
                if (response.data.ruptureList.length !== 0) {
                    var rupture = "Vous n'avez pas pu acheter " + ruptureList.join() + " !\n"
                    alert(rupture)
                }
                else {
                    alert("Achats effectués !")
                }
            })
        }
    }
};
</script>

<style>
#panier_button {
    position: absolute;
    left: 3%;
    margin: 1.5%;
}
#panier img {
    width: 35%;
    height: auto;
    left: 0%;
}
#panier {
    background-color: rgba(61, 56, 56, 0.329);
    
    width: 35%;
}
#panier_liste {
    height: 35%;
    margin: 1.5%;
}
#panier_vide {
    background-color: rgba(61, 56, 56, 0.329);
    position: absolute;
    left: 5%;
    margin: 5%;
}
</style>