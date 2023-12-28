'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const { default: SignUpCard } = require('@/components/SignUpCard');

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3300/register', { email: email, username: username, name: name, password: password });
      router.push('/login');
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      alert(err.response.data.payload.message);
    } finally {
      setLoading(false);
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
      <SignUpCard onSubmit={handleSubmitForm} onEmailChange={handleSetEmail} onUsernameChange={handleSetUsername} onNameChange={handleSetName} onPasswordChange={handleSetPassword} isLoading={loading} />
    </main>
  );
};

export default SignUp;
