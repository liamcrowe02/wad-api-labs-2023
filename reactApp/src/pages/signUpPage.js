import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    // Check for empty fields
    if (!userName.trim() || !password.trim() || !passwordAgain.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    // Check if passwords match
    if (!validPassword || password !== passwordAgain) {
      setError("Passwords must match and meet the criteria.");
      return;
    }

    // If all checks pass, proceed with registration
    context.register(userName, password);
    setRegistered(true);
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in</p>
      <input value={userName} placeholder="user name" onChange={(e) => setUserName(e.target.value)}></input><br />
      <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={(e) => setPasswordAgain(e.target.value)}></input><br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;
