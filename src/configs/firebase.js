import * as firebase from 'firebase/app';
import 'firebase/firestore';
const app = {
    apiKey: "AIzaSyAU0kWWt37COb-ff7ywI_aZg2SV4pMYKIo",
    authDomain: "facundomanresa-1a907.firebaseapp.com",
    projectId: "facundomanresa-1a907",
    storageBucket: "facundomanresa-1a907.appspot.com",
    messagingSenderId: "68122848512",
    appId: "1:68122848512:web:947b3e2258299cfcd317e5"
};
  
export function getFirestore() {
  return firebase.firebase(app);
}