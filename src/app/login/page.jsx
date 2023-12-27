'use client';
import LoginCard from '@/components/LoginCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3300/login', { username: username, password: password });
      setData(res.data);
    } catch (err) {
      console.error(`Error : ${err}`);
      setError('Username atau Password Salah');
    } finally {
      setLoading(false);
    }
  };

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (data) {
      alert(data?.payload.message);
    }

    if (error) {
      alert(error);
      setError(null); // Clear the error state after showing the alert
    }
  }, [data, error]);

  return (
    <main>
      <LoginCard onSubmit={handleLogin} onUsernameChange={handleUsername} onPasswordChange={handlePassword} isLoading={loading} />
    </main>
  );
};

export default Login;
