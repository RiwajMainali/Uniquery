// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdlmhVk0VUoFGix4cM6hhS7UPcNXcQdAU',
  authDomain: 'project-61dcd.firebaseapp.com',
  databaseURL: 'https://project-61dcd-default-rtdb.firebaseio.com',
  projectId: 'project-61dcd',
  storageBucket: 'project-61dcd.appspot.com',
  messagingSenderId: '8277896555',
  appId: '1:8277896555:web:048508bb2c3c05e10c702e',
  measurementId: 'G-RWQYRW5JEH'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

//export db constant to use it anywhere in app
//to CRUD firestone database
export { db }
