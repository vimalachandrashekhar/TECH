import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  function checkPassword() {
    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    if (regex.test(password)) {
      setPasswordStrength('correct');
    } else {
      setPasswordStrength('incorrect');
    }
  }

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
      <button onClick={checkPassword}>Check Password</button>
      {passwordStrength === 'correct' && <p>Correct Password!</p>}
      {passwordStrength === 'incorrect' && <p>Incorrect Password!</p>}
    </div>
  );
}

export default PasswordChecker;
