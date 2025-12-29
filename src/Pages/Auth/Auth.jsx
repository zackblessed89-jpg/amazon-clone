import React from "react";
import classes from "../Auth/Auth.module.css";
import LayOut from "../../Components/LayOut/LayOut";

function Auth() {
  return (
    <LayOut>
      <div className={classes.authContainer}>
        <h2>Signup</h2>
        <p>Please create an account to continue.</p>
      </div>
    </LayOut>
  );
}

export default Auth;
