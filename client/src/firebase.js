import firebase from 'firebase';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK_Qhlx0nuIWLVJMhAbGMp63_Gevi4uIA",
    authDomain: "hotel-9e930.firebaseapp.com",
    projectId: "hotel-9e930",
    storageBucket: "hotel-9e930.appspot.com",
    messagingSenderId: "896204020165",
    appId: "1:896204020165:web:c77f8842087e613fa593ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();