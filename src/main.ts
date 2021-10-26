import { createApp } from 'vue'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Bar from './pages/Bar.vue'

const routes = setupLayouts([
  {
    path: '/',
    component: Home,
  },
  {
    path: '/bar',
    component: Bar,
    meta: {
      layout: 'bar',
    },
  },
])

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
