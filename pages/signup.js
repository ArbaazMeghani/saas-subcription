import React, { useState, useEffect } from 'react';
import { SignUpForm, PaymentForm } from '../components';
import { useRouter } from 'next/router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createAccount } from '../auth'
import Router from 'next/router'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const signup = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    page: 0,
    email: "",
    password: "",
    passwordConfirm: "",
    price: {
      id: '',
      unit_amount_decimal: 0
    }
  });

  useEffect(() => {setUserInfo(
    {
      ...userInfo,
      price: {
        id: router.query.priceId,
        unit_amount_decimal: router.query.price
      }
    });
  },[userInfo.price.id, userInfo.price.unit_amount_decimal]);

  const updatePage = (value) => {
    let newPage = userInfo.page + value;

    updateField("page", newPage);
  }

  const updateField = (field, value) => {
    setUserInfo({...userInfo, [field]: value});
  }

  const signUp = async (next) => {
    await createAccount(userInfo.email, userInfo.password);
    if(userInfo.price.unit_amount_decimal == 0) {
      Router.push(`/dashboard`);
    } else {
      next();
    }
  }

  if(userInfo.page === 0) {
    return <SignUpForm userInfo={userInfo} updateField={updateField} updatePage={updatePage} createAccount={signUp}/>;
  } else {
    return (
      <Elements stripe={stripePromise}>
        <PaymentForm updatePage={updatePage} price={userInfo.price}/>
      </Elements>
    )
  }
}

export default signup;