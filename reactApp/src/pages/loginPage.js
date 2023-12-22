import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = () => {
    // Check if either username or password is empty
    if (!userName.trim() || !password.trim()) {
      setError("Please fill in both username and password.");
      return;
    }

    // Attempt to authenticate
    context.authenticate(userName, password);
  };

  let location = useLocation();
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages</p>
      <input id="username" placeholder="user name" onChange={(e) => setUserName(e.target.value)}></input><br />
      <input id="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input><br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={login}>Log in</button>
      <p>
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage;
