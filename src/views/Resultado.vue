<template>
<br>
<br>
<div style="text-align: center">
  <img src="/public/logo.png" width= '250'/>  
    </div>
<br>
<ion-button @click = "resultado" expand="block">Resultado</ion-button>

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
        data(){
  return {estacao: -1}
  return {regiao: -1}
  return {urbano: -1}
},

        setup() {
          return { add };
        },

        created() {

          let urlParams = new URLSearchParams(window.location.search);
          this.estacao = parseInt(urlParams.get('estacao'));
          this.regiao = parseInt(urlParams.get('regiao'));
          this.urbano = parseInt(urlParams.get('urbano'));

        },
        methods:
      {
          resultado()
          {
            if (this.regiao == 0)
            {
              if (this.urbano == 0){
                alert("Rio Branco, AC");
              }
              else if (this.urbano == 1){
                alert("Alter do chão, PA");
              }
              else if (this.urbano == 2){
                alert("Jalapão, TO");
              }
            }
            else if (this.regiao == 1)
            {
              if (this.urbano == 0){
                alert("Natal, RN");
              }
              else if (this.urbano == 1){
                alert("Recife, PE");
              }
              else if (this.urbano == 2){
                alert("Chapada diamantina, Bahia");
            }
          }
            else if (this.regiao == 2)
            {
              if (this.urbano == 0){
                alert("Esplanada, DF");
              }
              else if (this.urbano == 1){
                alert("Esplanada, DF");
              }
              else if (this.urbano == 2){
                alert("Bonito, BA");
            }
          }
            else if (this.regiao == 3)
            {
              if (this.urbano == 0){
                alert("Rio de Janeiro, RJ");
              }
              else if (this.urbano == 1){
                alert("Rio de Janeiro, RJ");
              }
              else if (this.urbano == 2){
                alert("Paraty, RJ");
              }
            }
            else if (this.regiao == 4)
            {
              if (this.urbano == 0){
                alert("Gramado, RS");
              }
              else if (this.urbano == 1){
                alert("Gramado, RS");
              }
              else if (this.urbano == 2){
                alert("Curitiba, PA");
              }
            }
          },
      },
    });
 
    </script>