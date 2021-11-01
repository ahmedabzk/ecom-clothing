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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log('error creating user', error.message);

    }
}
return userRef;
}


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;