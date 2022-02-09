import firebase from "firebase/app";
import "firebase firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBEfBoaNvam4Dy5R12nJ0ihHW8hHYy2b8",
  authDomain: "awesome-recipes-5dd0e.firebaseapp.com",
  projectId: "awesome-recipes-5dd0e",
  storageBucket: "awesome-recipes-5dd0e.appspot.com",
  messagingSenderId: "546280988579",
  appId: "1:546280988579:web:65ef325af8369da2fac416",
};
//init firebase
firebase.initializeApp(firebaseConfig);
//init service
const projectFirestore = firebase.firestore();
export { projectFirestore };
