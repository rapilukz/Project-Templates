import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LayoutEditor from 'layout-editor'
import 'layout-editor/dist/style.css'

const app = createApp(App)

app.use(LayoutEditor)
app.mount('#app')
