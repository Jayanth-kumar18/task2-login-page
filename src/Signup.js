// Signup.js
import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Perform signup logic here, and call onSignup with user data
    onSignup({ username, password });
    // Reset fields and error after signup
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
