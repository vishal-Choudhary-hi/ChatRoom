import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Add ur firebase location here

firebase.initializeApp(firebaseConfig);
const prejectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { prejectFirestore, timestamp, projectAuth };
