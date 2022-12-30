import AppComponent from './components/AppComponent.vue'

export default {
    install: (app, options) => {
        app.component("AppComponent", AppComponent)
    },
};