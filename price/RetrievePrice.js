import * as firebase from "firebase/app";

import "firebase/functions";

const RetrievePrice = async (priceId) => {
  const retrievePrice = firebase.functions().httpsCallable('retrievePrice');

  return await retrievePrice(priceId);
}

export default RetrievePrice;