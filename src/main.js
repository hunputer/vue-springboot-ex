import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'; //설정 라우터 호출

createApp(App).use(router).mount('#app')