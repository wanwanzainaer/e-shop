import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAI5vQjE_4efmq6nyqu3U16a_0bBZCRhbo",
  authDomain: "crwn-db-419a5.firebaseapp.com",
  databaseURL: "https://crwn-db-419a5.firebaseio.com",
  projectId: "crwn-db-419a5",
  storageBucket: "crwn-db-419a5.appspot.com",
  messagingSenderId: "443492160845",
  appId: "1:443492160845:web:1444b5d679cc227a289304"
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;