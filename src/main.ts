import router from './router'
import './style.css'
import Index from '@/index.vue'

const app = createApp(Index)
app.use(router)
app.mount('#app')
