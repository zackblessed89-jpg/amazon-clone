import React from "react";
import classes from "../Auth/Auth.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          className={classes.loginLogo}
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="Amazon Logo"
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign-In </h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password"> Password</label>
            <input type="password" id="Password" />
          </div>
          <button className= {classes.login__signInButton}> Sign In</button>
        </form>
        <p>
          {/* agreement  */}
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale. Please see our Privacy Notice , our cookies Notice and our Interest -Based Ads Notice.  
        </p>
        {/* create account button  */}
        <button className= {classes.login__registerButton}> Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
