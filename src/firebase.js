import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAN3E50rsokWiqRoLIzz4suBVsSDhsCbPw",
  authDomain: "blog-with-firebase-baa6c.firebaseapp.com",
  projectId: "blog-with-firebase-baa6c",
  storageBucket: "blog-with-firebase-baa6c.appspot.com",
  messagingSenderId: "4567090411",
  appId: "1:4567090411:web:f0df8c3e37f271e2fbeaae",
  measurementId: "G-J0X6194FG4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// firenaseの公式ドキュメントを参照

export { auth, provider, db };