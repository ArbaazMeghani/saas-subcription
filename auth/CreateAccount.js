import * as firebase from "firebase/app";
import initializeApp from '../config/firebase-config'

initializeApp()

const auth = firebase.auth()

const createAccount = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
}

export default createAccount;