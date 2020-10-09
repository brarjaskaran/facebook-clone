import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user);

        dispatch({
          type: actionTypes.SET_USER,
          user: user.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png"
          alt="logo"
        />
        <img
          className="login__facebook"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Facebook-reversed.svg/1920px-Facebook-reversed.svg.png"
          alt=""
        />
      </div>

      <Button
        onClick={signIn}
        className="login__button"
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
