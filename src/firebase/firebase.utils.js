import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCbEIc7sQ9aRwaQMrODMzGeRsL_1qc-lBU",
    authDomain: "crwn-db-8173f.firebaseapp.com",
    projectId: "crwn-db-8173f",
    storageBucket: "crwn-db-8173f.appspot.com",
    messagingSenderId: "538764806704",
    appId: "1:538764806704:web:ed47b45c47a946d06d3bf5",
    measurementId: "G-H2KYCQVMPM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

  export default firebase;
  