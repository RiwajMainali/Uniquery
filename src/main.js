import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { globalCookiesConfig } from 'vue3-cookies'
import cors from 'cors'


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
app.use(cors)
router.app = app

app.mount('#app')