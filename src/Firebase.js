// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbOgDACG-zDsY_YYeOChIJWhNe2VAkPDE",
  authDomain: "pblivescore.firebaseapp.com",
  databaseURL: "https://pblivescore-default-rtdb.firebaseio.com",
  projectId: "pblivescore",
  storageBucket: "pblivescore.appspot.com",
  messagingSenderId: "448698897999",
  appId: "1:448698897999:web:a436ab861ffff2a5de7c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);