// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfzm_OrhlMsMnf7vWGOvmbBRujXzCA86E",
  authDomain: "banga-site.firebaseapp.com",
  projectId: "banga-site",
  storageBucket: "banga-site.appspot.com",
  messagingSenderId: "229186375516",
  appId: "1:229186375516:web:77987c7eaba3e4642d7b99",
  measurementId: "G-66BRMGTEQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);