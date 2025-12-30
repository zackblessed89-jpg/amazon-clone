import React, { useState } from "react";
import classes from "../Auth/Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"

function Auth() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
// const [error, setError]= useState("");
// console.log(password,email);


const authHandler = async(e)=> { e.preventDefault()
  console.log(e.target.name);
if (e.target.name == "signin"){
//  firebase auth
signInWithEmailAndPassword (auth,email,password).then((userInfo)=> {
  console.log(userInfo);
}).catch((err)=>{
  console.log(err);
});

} else {

  createUserWithEmailAndPassword (auth,email,password)
  .then((userInfo)=> {
    console.log(userInfo);
  }).catch((err)=>{
    console.log(err);
  });

}
};




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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password"> Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="Password"
            />
          </div>
          <button type="submit" 
          name="signin"
          onClick={authHandler} className={classes.login__signInButton}> Sign In</button>
        </form>
        <p>
          {/* agreement  */}
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see our Privacy Notice , our cookies Notice and our
          Interest -Based Ads Notice.
        </p>
        {/* create account button  */}
        <button type="submit" 
        name="signup"
        onClick= {authHandler}className={classes.login__registerButton}>
          {" "}
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
