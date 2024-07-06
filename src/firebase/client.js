import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhbGwqYinsDmiwqTkJfVFsH_Vyx1lMHf8",
    authDomain: "techarg-e-commerce.firebaseapp.com",
    projectId: "techarg-e-commerce",
    storageBucket: "techarg-e-commerce.appspot.com",
    messagingSenderId: "813489097690",
    appId: "1:813489097690:web:809edbe80164746c634ee3",
    };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
