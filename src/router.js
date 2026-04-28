import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import RagPage from './views/RagPage.vue'
import Text2SqlPage from './views/Text2SqlPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/rag', name: 'rag', component: RagPage },
  { path: '/text2sql', name: 'text2sql', component: Text2SqlPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router