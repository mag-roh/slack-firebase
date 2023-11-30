import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://images.prismic.io/smarttask/1c150a8e-9f13-420e-8b0f-e6365219250f_slack.png?auto=compress,format"
          alt=""
        />
        <h1>Sign in to Magnetic's space</h1>
        <p>magnetic.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
export default Login;
