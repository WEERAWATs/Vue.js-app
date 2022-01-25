import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import router from './router'
import store from './store/store'

import JwPagination from 'jw-vue-pagination'

createApp(App)
    .use(router)
    .use(store)
    .component('jw-pagination', JwPagination)
    .mount('#app')
