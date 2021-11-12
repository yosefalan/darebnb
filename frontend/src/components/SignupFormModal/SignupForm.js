import React, { useState } from "react";
import { signup, demoLogin } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import  '../LoginFormModal/form.css'

function SignupForm() {
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(signup({ username, email, password, image }))
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setImage(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleDemoLogin= (e) => {
    e.preventDefault();
    return dispatch(demoLogin())
  }


  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="text"
            className="field"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
             {/* <input
            type="text"
            className="field"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setUsername(e.target.value)}
            required
            /> */}
          <input type="file" onChange={updateFile} />
          <input
            type="password"
            className="field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          <input
            type="password"
            className="field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        <button type="submit" className="signupSubmitButton">Create Account</button>
        <button onClick={handleDemoLogin} className="demoLoginButton">Demo Login</button>

      </form>
      {/* <div>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div> */}
    </div>
  );
}






export default SignupForm;
