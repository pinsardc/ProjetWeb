<template>
    <router-link to='/DemandeMonteur'><i class="fa fa-shopping-cart" aria-hidden="true"></i>Si vous souhaitez que l'on monte le pc chez vous</router-link>
    <h1 class="titre">Voici quelques informations pour vous aider à monter votre nouveau pc :</h1>
    
    <p class="titre" id="texte">
        Comment monter son pc facilement :
    </p>

    <div class="montage">  
        <iframe display="block" text-align="center" width="540" height="315"
        src="https://www.youtube.com/embed/twchZk8W5TQ">
        </iframe>
      
    </div>
    <div class="montage">  
        <img :src="require(`@/assets/img/montagePc1.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc2.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc3.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc4.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc5.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc6.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc7.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc8.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc9.jpg`)"/>
        <img :src="require(`@/assets/img/montagePc10.jpg`)"/>
        
    </div>
</template>

<script>
export default {};
</script>

<style>
.titre {
    color: rgba(64, 64, 122, 1.0);
    text-shadow: 1px 1px 1px black;
    text-align:center;
}
#texte {
     font-size:21px;
}
.montage {
    display:table-row;
    padding: 10px;
}
</style>