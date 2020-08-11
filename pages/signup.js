import React, { useState } from 'react';
import { SignUpForm } from '../components';

const signup = () => {
  const [userInfo, setUserInfo] = useState({
    page: "",
    email: "",
    password: "",
    passwordConfirm: "",
    price: ""
  })

  const updateField = (field, value) => {
    setUserInfo({...userInfo, [field]: value})
  }
  return (
    <SignUpForm userInfo={userInfo} updateField={updateField}/>
  );
}

export default signup;