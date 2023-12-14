// App.js
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (userData) => {
    // Perform signup logic here and set the user state
    console.log('Signup:', userData);
    setUser(userData);
  };

  const handleLogin = (userData) => {
    // Perform login logic here and set the user state
    console.log('Login:', userData);
    setUser(userData);
  };

  const handleLogout = () => {
    // Perform logout logic here and reset the user state
    console.log('Logout');
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <div>
          <Signup onSignup={handleSignup} />
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
