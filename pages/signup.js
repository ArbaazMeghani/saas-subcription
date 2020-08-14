import React, { useState } from 'react';
import { SignUpForm, PaymentForm, SignUpTier } from '../components';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const signup = () => {
  const [userInfo, setUserInfo] = useState({
    page: 2,
    totalPages: 3,
    email: "",
    password: "",
    passwordConfirm: "",
    price: ""
  });

  const updateField = (field, value) => {
    setUserInfo({...userInfo, [field]: value});
  }

  if(userInfo.page === 0) {
    return <SignUpForm userInfo={userInfo} updateField={updateField}/>;
  } else if(userInfo.page === 1) {
    return <SignUpTier />;
  } else {
    return (
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    )
  }
}

export default signup;