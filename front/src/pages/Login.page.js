import React, { useState } from "react";
import { LoginSignupForm } from "../components/LoginSignupForm";
import { doLogin, useUserSetter, whoami } from "../../lib/auth.api";
import { withRouter } from "react-router-dom";

export const LoginPage = withRouter(({ history }) => {
  const [error, setError] = useState();
  const setUser = useUserSetter();
  const [me, setMe] = useState();


  // const quiensoy = () => {
  //   console.log("Acabas de entrar en quien soy")
  //   whoami()
  //     .then(me => {
  //       setMe(me)
  //       console.log(me)
  //     })
  //     .catch(e => {
  //       console.log("No user logged in")
  //     })
  // }



  const handleSubmit = async (username, password) => {
    // Handle errors
    try {
      // CLIENT VALIDATION LOGIC
      if (username == "") {
        throw new Error("User cant be empty");
      } else if (password == "") {
        throw new Error("Password cant be empty");
      }
      const user = await doLogin(username, password);
      // Redirige el router a la HOME
      history.push("/");
      setUser(user);
      //quiensoy()
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <div>
      <h2 className="loginh2">Login</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <LoginSignupForm {...{ handleSubmit }} />
    </div>
  );
});
