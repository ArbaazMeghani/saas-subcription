import * as firebase from "firebase/app";
import initializeApp from '../config/firebase-config'

import "firebase/auth"
import "firebase/functions"

import Cookies from 'js-cookie'

initializeApp()

const auth = firebase.auth()

const createAccount = async (email, password) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const createStripeCustomer = firebase.functions().httpsCallable('createStripeCustomer');

  const customer = await createStripeCustomer(JSON.stringify(user));
  Cookies.set("customerId", customer.id);
}

export default createAccount;