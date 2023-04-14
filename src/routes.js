import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('auth'));
  if (to.name != 'Login' && !isAuthenticated) next({ name: 'Login' });
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' });
  else next();
});

export default router;
