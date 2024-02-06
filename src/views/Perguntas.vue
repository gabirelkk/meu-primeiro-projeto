<template>
    <br>
    <br>
    <div style="text-align: center">
  <img src="/public/logo.png" width= '250'/>  
    </div>
  <br>
  <div style="text-align: center">
    <ion-text fill="clear">Em qual estação você pretende viajar:</ion-text> 
  </div>
  <br>
  <div style="text-align: center">
  <ion-button  expand="block" @click="registra(0)" >Primavera</ion-button>
  <br>
  <ion-button expand="block" @click="registra(1)" >Verão</ion-button>
  <br>
  <ion-button expand="block" @click="registra(2)" >Outono</ion-button>
  <br>
  <ion-button expand="block" @click="registra(3)" >Inverno</ion-button>
  </div>
    </template>
    

    
    <script lang="ts">
      import { defineComponent } from 'vue';
      import { IonIcon, IonInput } from '@ionic/vue';
      import { add } from 'ionicons/icons';
    
      export default defineComponent({
        components: { IonIcon, IonInput },
        setup() {
          return { add };
        },

        created() {

        },

        methods:
      {
          registra(valor: number)
          {
             window.location.href = '/regioes?estacao='+valor;
          },
      },
      });
 
    </script>