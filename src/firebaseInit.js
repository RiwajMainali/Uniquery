// src/firebaseInit.js
//import firebase from "firebase"
import { initializeApp } from "firebase/app";

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
//const app = initializeApp(firebaseConfig);
//export default firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
