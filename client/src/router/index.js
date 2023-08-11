import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView';
import SigninView from '../views/SigninView';
import ChatView from '../views/ChatView.vue';

const routes = [
    {
        path: '/',
        name: 'Default',
        component: HomeView
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'Sign in',
        component: SigninView
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;