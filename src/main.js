import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { globalCookiesConfig } from 'vue3-cookies'

globalCookiesConfig ({
    expireTimes: "-1",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});

const app = createApp(App)

app.use(router)

app.mount('#app')