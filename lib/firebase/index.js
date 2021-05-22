import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();

export { auth, firebase, database };
