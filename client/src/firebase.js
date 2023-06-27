// import functions from firebase initialize, auth, firestor, storage
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';



//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGC5fOkiCAfPoG9aKbPDcJ2OOI3dEl8DQ",
    authDomain: "zoomate1-5a1cb.firebaseapp.com",
    projectId: "zoomate1-5a1cb",
    storageBucket: "zoomate1-5a1cb.appspot.com",
    messagingSenderId: "241578937517",
    appId: "1:241578937517:web:8789db025d23abb7338a24"
};


// initialize firebase
const app = initializeApp(firebaseConfig);

//give app to any function from firebase
export const auth = getAuth(app);
export const db = getStorage(app);