import * as firebase from "firebase/app";
import initializeApp from '../config/firebase-config'

initializeApp()

const auth = firebase.auth()

const createAccount = async (email, password) => {
  const user = await auth.createUserWithEmailAndPassword(email, password);
  const createStripeCustomer = firebase.functions().httpsCallable('createStripeCustomer');

  const res = await createStripeCustomer(user);
  
}

export default createAccount;