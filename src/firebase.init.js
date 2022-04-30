// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_APPID, */
  apiKey: "AIzaSyAP_nLS45ovSmZMo9RLH46rdaIE0Q5leYs",
  authDomain: "nike-shoes-warehouse-f66ef.firebaseapp.com",
  projectId: "nike-shoes-warehouse-f66ef",
  storageBucket: "nike-shoes-warehouse-f66ef.appspot.com",
  messagingSenderId: "598441759622",
  appId: "1:598441759622:web:aebc5003abab34cb0f5207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;