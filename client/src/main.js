import { createApp } from 'vue'
import App from './App.vue'
import router from './router/mainRouter';

// External stylesheets
import './assets/files/bootstrap/css/bootstrap.min.css';
import './assets/files/bootstrap/js/bootstrap.bundle.min.js';
import './assets/files/css/global.css';
import './assets/files/icons/bootstrap-icons.css';

createApp(App).use(router).mount('#app');
