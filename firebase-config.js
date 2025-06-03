// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase config object (you can find it in Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAAoUylX2gqffF_Rq0oOi7ggcaQS3xt30M",
  authDomain: "http://safewebjr.firebaseapp.com",
  projectId: "safewebjr",
  storageBucket:  "safewebjr.firebasestorage.app",
  messagingSenderId:"805994437090",
  appId: "1:805994437090:web:2184304176c1ce231181bb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export for use in content.js
export { db, collection, addDoc };