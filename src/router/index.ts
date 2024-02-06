import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Perguntas from '../views/Perguntas.vue';
import Regioes from '../views/Regioes.vue';
import Urbano from '../views/Urbano.vue';
import Resultado from '../views/Resultado.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/regioes',
    name: 'Regioes',
    component: Regioes
  },
  {
    path: '/resultado',
    name: 'Resultado',
    component: Resultado
  },
  {
    path: '/urbano',
    name: 'Urbano',
    component: Urbano
  },
  {
    path: '/perguntas',
    name: 'Perguntas',
    component: Perguntas
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
