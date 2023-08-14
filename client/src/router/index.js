import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView';
import SigninView from '../views/SigninView';
import SignupView from '../views/SignupView';
import ChatView from '../views/ChatView.vue';
import OnboardingViewVue from '@/views/OnboardingView.vue';

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
        path: '/signup',
        name: 'Sign up',
        component: SignupView
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatView
    },
    {
        path: '/welcome',
        name: 'Welcome Page',
        component: OnboardingViewVue
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;