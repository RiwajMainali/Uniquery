import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

var firebaseConfig = {
	apiKey: "AIzaSyCdlmhVk0VUoFGix4cM6hhS7UPcNXcQdAU",
	authDomain: "project-61dcd.firebaseapp.com",
	databaseURL: "https://project-61dcd-default-rtdb.firebaseio.com",
	projectId: "project-61dcd",
	storageBucket: "project-61dcd.appspot.com",
	messagingSenderId: "8277896555",
	appId: "1:8277896555:web:048508bb2c3c05e10c702e",
	measurementId: "G-RWQYRW5JEH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
