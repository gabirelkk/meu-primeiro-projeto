<template>
    <br>
    <br>
    <div style="text-align: center">
  <img src="/public/logo.png" width= '250px'/>  
</div>
  <br>
  <div style="text-align: center">
    <ion-text fill="clear">Para qual região você pretende viajar:</ion-text> 
  </div>
  <br>
  <div style="text-align: center">
  <ion-button expand="block" @click= "registra(0)" >Norte</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(1)" >Nordeste</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(2)" >Centro-Oeste</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(3)" >Sudeste</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(4)" >Sul</ion-button>
  </div>

    </template>
    

    
    <script lang="ts">
      import { defineComponent } from 'vue';
      import { IonIcon, IonInput } from '@ionic/vue';
      import { add } from 'ionicons/icons';
    
      export default defineComponent({
        components: { IonIcon, IonInput },

data(){
  return {estacao: -1}
},

        setup() {
          return { add };
        },

        created() {

          let urlParams = new URLSearchParams(window.location.search);
          this.estacao = parseInt(urlParams.get('estacao'));

        },

        methods:
      {
          registra(valor: number)
          {
             window.location.href = '/urbano?estacao='+ this.estacao +'&regiao='+ valor;
          },
      },
      });
 
    </script>