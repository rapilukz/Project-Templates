import LayoutEditor from './components/LayoutEditor.vue'

export default {
    install: (app, options) => {
        app.component("LayoutEditor", LayoutEditor)
    },
};