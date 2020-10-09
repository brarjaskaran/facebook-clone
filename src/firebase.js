import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBitl4zWmbLoefq5ZpEmxb3iMb2ZDoXIew",
  authDomain: "facebook-b5fcb.firebaseapp.com",
  databaseURL: "https://facebook-b5fcb.firebaseio.com",
  projectId: "facebook-b5fcb",
  storageBucket: "facebook-b5fcb.appspot.com",
  messagingSenderId: "917141026671",
  appId: "1:917141026671:web:9260fdd38df5c8704c5a9a",
  measurementId: "G-JJB2NR5NZ4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
