import React, { useState, useEffect } from 'react';
import { SignUpForm, PaymentForm, SignUpTier } from '../components';
import { useRouter } from 'next/router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createAccount } from '../auth'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const signup = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    page: 0,
    email: "",
    password: "",
    passwordConfirm: "",
    price: 0
  });

  useEffect(() => {
    console.log(userInfo.price)
    updateField("price",  router.query.price);
  },[userInfo.price]);

  const updatePage = (value) => {
    let newPage = userInfo.page
    if( (newPage === 2 || newPage === 0) && router.query.price != 0) {
      newPage += 2 * value;
    } else {
      newPage += value;
    }

    setUserInfo({...userInfo, "page": newPage})
  }

  const updateField = (field, value) => {
    setUserInfo({...userInfo, [field]: value});
  }

  const signUp = () => {
    createAccount(userInfo.email, userInfo.password);
  }

  if(userInfo.page === 0) {
    return <SignUpForm userInfo={userInfo} updateField={updateField} updatePage={updatePage} createAccount={signUp}/>;
  } else if(userInfo.page === 1) {
    return <SignUpTier updateField={updateField} updatePage={updatePage}/>;
  } else {
    return (
      <Elements stripe={stripePromise}>
        <PaymentForm updatePage={updatePage} price={userInfo.price}/>
      </Elements>
    )
  }
}

export default signup;