//routers
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

//cloud firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('../pages/ResultsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue')
    }
  ]
})
export default router


//Uniquery firebase configuration
const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }
