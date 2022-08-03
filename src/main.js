import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { globalCookiesConfig } from 'vue3-cookies'


//todo: redo cookie component.
globalCookiesConfig ({
    expireTimes: "-1",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});

const app = createApp(App)

app.use(router)
router.app = app

app.mount('#app')