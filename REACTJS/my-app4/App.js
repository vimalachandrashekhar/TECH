import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Check the credentials
    if (username === 'myusername' && password === 'mypassword') {
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log In</button>
      <button type="submit">exit</button>
    </form>
  );
}

export default Login;
