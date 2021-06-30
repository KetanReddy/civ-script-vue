import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import PlayerSetup from '@/views/steps/PlayerSetup.vue'
import CivPicker from '@/views/steps/CivPicker.vue'
import store from '@/store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'start',
        component: PlayerSetup
      },
      {
        path: '/roll',
        name: 'roll',
        component: CivPicker,
        beforeEnter: () => {
          store.dispatch('rollCivs')
        }
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'start' && store.getters['players'].length === 0) next({ name: 'start' })
  else next()
})

export default router;
