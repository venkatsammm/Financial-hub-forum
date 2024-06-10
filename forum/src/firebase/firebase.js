import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyC8j8l1KaiVjmy7wGEOELLpCQkBVyJgs9g",
	authDomain: "financial-hub-dfedc.firebaseapp.com",
	projectId: "financial-hub-dfedc",
	storageBucket: "financial-hub-dfedc.appspot.com",
	messagingSenderId: "625218922052",
	appId: "1:625218922052:web:5f2faf30349d61b5bc3e11",
	measurementId: "G-MYEBCJWHCG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
