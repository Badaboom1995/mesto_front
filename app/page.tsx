'use client'
import React, { useState, useRef } from 'react';
import { TextField, Container, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('https://api.mesto.co/v1/auth/getRefreshTokenByPassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, RqUid:uuid() }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    console.log(data);
                }).then(() => {
                    // @ts-ignore
                    window.Telegram.WebApp.close()
                })
                // return res.json();
            }
            throw new Error('Network response was not ok.');
        })
      console.log(`Username: ${email}, Password: ${password}`);
    }

  return (
      <Container className='w-[500px]'>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
          />
          <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
          />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full mt-4 rounded">
                Submit
            </button>
        </form>
      </Container>
  );
};

export default LoginForm;
