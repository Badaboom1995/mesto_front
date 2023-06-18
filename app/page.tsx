'use client'
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Insert your logic for authentication here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
      <Container>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
          <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
          >
            Submit
          </Button>
        </form>
      </Container>
  );
};

export default LoginForm;
