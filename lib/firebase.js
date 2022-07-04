import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_w5NTnCkRUsvSzWSjOPrYyO0K9sjSsFc',
  authDomain: 'projectalpha-4f185.firebaseapp.com',
  projectId: 'projectalpha-4f185',
  storageBucket: 'projectalpha-4f185.appspot.com',
  messagingSenderId: '894051484847',
  appId: '1:894051484847:web:0ac69da8152fedb6db005a',
  measurementId: 'G-LCC1S89EWC',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const google = new GoogleAuthProvider();

export { app, firestore, auth, google };
