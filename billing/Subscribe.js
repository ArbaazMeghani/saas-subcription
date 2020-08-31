import * as firebase from "firebase/app";

import "firebase/functions";

import Cookies from 'js-cookie';

const Subscribe = async (priceId, paymentMethodId) => {
  const createSubscription = firebase.functions().httpsCallable('createSubscription');
  const customerId = Cookies.get("customerId");

  await createSubscription(JSON.stringify({
    customerId: customerId,
    priceId: priceId,
    paymentMethodId: paymentMethodId
  }));
}

export default Subscribe;