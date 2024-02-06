<template>
    <br>
    <br>
    <div style="text-align: center">
  <img src="/public/logo.png" width= '250px'/>  
</div>
  <br>
  <div style="text-align: center">
    <ion-text fill="clear">Qual o seu interesse ideal para viajar?:</ion-text> 
  </div>
  <br>
  <div style="text-align: center">
  <ion-button expand="block" @click= "registra(0)" >Cidade</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(1)" >Cultura</ion-button>
  <br>
  <ion-button expand="block" @click= "registra(2)" >Natuzera</ion-button>
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
  return {regiao: -1}
},

        setup() {
          return { add };
        },

        created() {

          let urlParams = new URLSearchParams(window.location.search);
          this.estacao = parseInt(urlParams.get('estacao'));
          this.regiao = parseInt(urlParams.get('regiao'));

        },

        methods:
      {
          registra(valor: number)
          {
             window.location.href = '/resultado?estacao='+ this.estacao +'&regiao='+ this.regiao +'&urbano=' + valor;
          },
      },
      });
 
    </script>