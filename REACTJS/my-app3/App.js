import React, { useState } from 'react';

function PasswordToggle() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={togglePasswordVisibility}>{showPassword ? "Hide Password" : "Show Password"}</button>
    </div>
  );
}

export default PasswordToggle;
