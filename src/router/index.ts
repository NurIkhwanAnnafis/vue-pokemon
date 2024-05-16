import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyPokemon from '../views/MyPokemon.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my-pokemon',
      name: 'my-pokemon',
      component: MyPokemon
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
