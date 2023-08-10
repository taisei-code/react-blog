import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL9kELKASnnz029rPtI-JeYlaK16QUe_E",
  authDomain: "react-blog-891b4.firebaseapp.com",
  projectId: "react-blog-891b4",
  storageBucket: "react-blog-891b4.appspot.com",
  messagingSenderId: "937771726760",
  appId: "1:937771726760:web:d38c9766f773dc55f00f9d",
};

const app = initializeApp(firebaseConfig);

/* 認証の初期化 */
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
/* データベースの初期化 */
const db = getFirestore(app);

export { auth, provider, db };
