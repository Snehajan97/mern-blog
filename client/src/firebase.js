// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d2786.firebaseapp.com",
  projectId: "mern-blog-d2786",
  storageBucket: "mern-blog-d2786.appspot.com",
  messagingSenderId: "209757235885",
  appId: "1:209757235885:web:127075c21ed92d698c7424"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);