
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBG7kLTvtdvYn9VSJ-9GuEZDfIin0t7ad4",
  authDomain: "devlink-fc1af.firebaseapp.com",
  projectId: "devlink-fc1af",
  storageBucket: "devlink-fc1af.appspot.com",
  messagingSenderId: "879467449126",
  appId: "1:879467449126:web:9acc9262200bea20a10fe7",
  measurementId: "G-NKE89D83MV"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth (firebaseApp);

export { db, auth };
