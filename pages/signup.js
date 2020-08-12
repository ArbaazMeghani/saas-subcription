import React, { useState } from 'react';
import { SignUpForm, PaymentForm, SignUpTier } from '../components';

const signup = () => {
  const [userInfo, setUserInfo] = useState({
    page: 1,
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
    return <PaymentForm />;
  }
}

export default signup;