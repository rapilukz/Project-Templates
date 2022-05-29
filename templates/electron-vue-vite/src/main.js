import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

/* css Files */
import './styles/styles.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

createApp(App).mount('#app');
