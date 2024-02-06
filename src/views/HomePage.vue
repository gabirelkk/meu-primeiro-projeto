<template>
<br>
<br>
<div style="text-align: center">
  <img src="/public/logo.png" width= '500px'/>  
</div>
<br>
<div style="text-align: center">
 <iont-text color>Iremos fazer perguntas para descobrir qual o melhor local para você viajar no Brasil</iont-text>
 </div>
<br>
 <ion-button expand="block" @click="Logar" >Começar</ion-button>
 <br>
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

    methods:
  {
      Logar()
      {
         window.location.href = '/perguntas';
      },
  },
  });
</script>