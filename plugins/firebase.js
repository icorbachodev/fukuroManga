import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAsAqde8R1p-1pNe_Dc95iBO0eBwRM-i6E",
    authDomain: "fukuromanga-6584c.firebaseapp.com",
    projectId: "fukuromanga-6584c",
    storageBucket: "fukuromanga-6584c.appspot.com",
    messagingSenderId: "1006246476821",
    appId: "1:1006246476821:web:97e0fb3476efc06d66e21c"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }