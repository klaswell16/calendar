import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AddPeople from '../views/AddPeople.vue'

const routes = [
  {
    path: '/',
    component: MainView,
  },
  {
    path: '/add-people',
    component: AddPeople,
    props: (route) => ({
      people: route.meta.parentState.people,
      onAddPerson: route.meta.parentState.onAddPerson,
    }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
