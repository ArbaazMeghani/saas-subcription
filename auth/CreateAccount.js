import * as firebase from "firebase/app";
import initializeApp from '../config/firebase-config'

import "firebase/auth"
import "firebase/functions"

initializeApp()

const auth = firebase.auth()

const createAccount = async (email, password) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const createStripeCustomer = firebase.functions().httpsCallable('createStripeCustomer');

  const res = await createStripeCustomer(JSON.stringify(user));
}

export default createAccount;