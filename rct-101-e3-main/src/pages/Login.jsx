import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"

const Login = () => {
  const  [isAuth,setIsAuth,ToggleAuth] = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        ToggleAuth()
        })
      .catch((err) => {
        alert("error");
      });
  };

  if (isAuth) {
    return <Navigate to="/products" />;
  }

  return (
    <div>
      <input data-cy="login-email"  placeholder="Enter Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input data-cy="login-password" placeholder="Enter Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button data-cy="login-submit" onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
