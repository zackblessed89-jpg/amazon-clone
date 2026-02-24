import React, { useContext, useState } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const navigate = useNavigate();

  //  Sign In
  const signIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // Sign Up
  const signUp = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          className={classes.loginLogo}
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign-In</h1>

        <form onSubmit={signIn}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={classes.login__signInButton}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE conditions of use & sale.
        </p>

        <button
          type="button"
          onClick={signUp}
          className={classes.login__registerButton}
        >
          Create your Amazon Account
        </button>

        {error && <small className={classes.error}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
