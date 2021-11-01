import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCFFizjMlDq-7HyFlNS2nCI11mwiyuiNhQ",
    authDomain: "ecom-clothing-f9dbe.firebaseapp.com",
    databaseURL: "https://ecom-clothing-f9dbe-default-rtdb.firebaseio.com",
    projectId: "ecom-clothing-f9dbe",
    storageBucket: "ecom-clothing-f9dbe.appspot.com",
    messagingSenderId: "777512727351",
    appId: "1:777512727351:web:21150dda3b0cd8794d20b2",
    measurementId: "G-6N8WM2QB9D"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;