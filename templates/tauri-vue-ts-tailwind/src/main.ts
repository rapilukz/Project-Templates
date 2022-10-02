import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';
import globalComponents from './components/';
import App from './App.vue';
import './input.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

globalComponents.forEach(component => {
  app.component(component.tagName, defineAsyncComponent(component.loader));
});

app.mount('#app');
