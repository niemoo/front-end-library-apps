'use client';

import axios from 'axios';
import { useState } from 'react';

const { default: SignUpCard } = require('@/components/SignUpCard');

const SignUp = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmitForm = async () => {
    try {
      const res = await axios.post('http://localhost:3300/register', { email: email, username: username, name: name, password: password });
    } catch (err) {
      console.error(`Error : ${err}`);
    }
  };

  const handleSetEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSetUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSetName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSetPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <main className="max-w-screen-xl h-full mx-auto">
      <SignUpCard onSubmit={handleSubmitForm} onEmailChange={handleSetEmail} onUsernameChange={handleSetUsername} onNameChange={handleSetName} onPasswordChange={handleSetPassword} />
    </main>
  );
};

export default SignUp;
