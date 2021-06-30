import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import PlayerSetup from '@/views/steps/PlayerSetup.vue'
import CivPicker from '@/views/steps/CivPicker.vue'
import DeathPicker from  '@/views/steps/DeathPicker.vue'
import FinalResults from  '@/views/steps/FinalResults.vue'
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
      {
        path: '/death',
        name: 'death',
        component: DeathPicker
      },
      {
        path: '/final',
        name: 'final',
        component: FinalResults
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
  if (to.name === 'death' && store.getters['deathPicks'].length === 0) next({ name: 'final' })
  else next()
})

export default router;
