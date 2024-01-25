// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import {createApp} from 'vue'
import store from './store'
import router from './router'
import './style.css';
// import currencyUSD from './filters/currency.js'

import App from './App.vue'

const app = createApp(App);

app
  .use(store)
  .use(router)
  .mount('#app')
;

// app.config.globalProperties.$filters = {
//   currencyUSD
// }