import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import { demoLogin } from "../../store/session";
import './form.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  // useEffect(() => {
  //   // const errors = []
  // })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoLogin= (e) => {
    e.preventDefault();
    return dispatch(sessionActions.demoLogin())
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
        </ul>
          <input
            type="text"
            className="field"
            placeholder="username or email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <input
            type="password"
            className="field"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <button type="submit" className="loginSubmitButton">Log In</button>
        <button onClick={handleDemoLogin} className="demoLoginButton">Demo Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
